import React, { createContext, useContext, useState, useEffect } from 'react';

interface Post {
  id: number;
  text: string;
  date: string;
  time: string;
  odds: number;
  confidence: number;
  expert: string;
  expertRating: number;
  expertImage: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'likes' | 'comments' | 'shares' | 'expert' | 'expertRating' | 'expertImage'>) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

const defaultExpertInfo = {
  expert: "Expert Pronos",
  expertRating: 4.8,
  expertImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
};

const defaultImages = [
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80&w=800",
];

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Omit<Post, 'id' | 'likes' | 'comments' | 'shares' | 'expert' | 'expertRating' | 'expertImage'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now(),
      likes: 0,
      comments: 0,
      shares: 0,
      image: defaultImages[Math.floor(Math.random() * defaultImages.length)],
      ...defaultExpertInfo,
    };

    setPosts(currentPosts => [post, ...currentPosts]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
}