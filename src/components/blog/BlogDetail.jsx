import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Blogs } from '../../redux/slices/blogSlice';
import { useSelector } from 'react-redux';


export function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useSelector(Blogs)
  const post = blogs.find(post => post._id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Post not found</h2>
        <button
          onClick={() => navigate('/blogs')}
          className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className='bg-slate-900'>
        <article className=" max-w-3xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/blogs')}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </button>
      
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-full object-cover rounded-xl mb-8"
      />
      
      <div className="space-y-4">
        <span className="text-purple-400 font-semibold">{post.category}</span>
        <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">{post.content}</p>
        </div>
      </div>
    </article>
    </div>
  );
}
