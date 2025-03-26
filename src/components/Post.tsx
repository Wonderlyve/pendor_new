import React from 'react';
import { Star, MessageCircle, Share2, ThumbsUp, Calendar, Clock, Trophy } from 'lucide-react';

interface PostProps {
  post: {
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
    detailedPrediction?: any;
  };
  onOpenBetModal: (prediction: any) => void;
}

export default function Post({ post, onOpenBetModal }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Post Header */}
      <div className="p-4 flex items-center space-x-3">
        <img 
          src={post.expertImage}
          alt={post.expert}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold">{post.expert}</h3>
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{post.expertRating}</span>
          </div>
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <Clock className="h-4 w-4" />
            <span>{post.time}</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 mb-2 text-sm">
          {post.text}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
          <span>Côte totale:</span>
          <span className="px-2 py-1 bg-gray-100 rounded">{post.odds}</span>
        </div>
      </div>

      {/* Post Image */}
      <div className="aspect-video relative">
        <img 
          src={post.image} 
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Prediction Info */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-accent" />
            <span className="font-medium">Confiance</span>
          </div>
          <span className="text-green-600 font-medium">{post.confidence}%</span>
        </div>

        {/* Social Actions */}
        <div className="flex items-center justify-between pt-3 border-t">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <ThumbsUp className="h-5 w-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <Share2 className="h-5 w-5" />
            <span>{post.shares}</span>
          </button>
          <button 
            onClick={() => post.detailedPrediction && onOpenBetModal(post.detailedPrediction)}
            className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
          >
            Voir l'analyse
          </button>
        </div>
      </div>
    </div>
  );
}