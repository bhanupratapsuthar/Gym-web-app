import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

export function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <article 
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/blogs/${post._id}`)}
    >
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center ml-4">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </div>
        </div>
      </div>
    </article>
  );
}
