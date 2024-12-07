import React from 'react';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../../data/blogData';


export function BlogList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Fitness Blog</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover expert tips, workout guides, and nutrition advice to help you achieve your fitness goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}