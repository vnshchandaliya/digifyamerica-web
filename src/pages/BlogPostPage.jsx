// src/pages/BlogPostPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blogs';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 md:px-8 lg:px-40 py-12 text-center p-20">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">Post not found!</h1>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
          &larr; Go back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-6 md:py-12 ">
      <div className="container mx-auto px-4 md:px-8 lg:px-40 ">
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg ">
          <Link to="/Blogs/" className="mb-6 inline-block text-blue-600 hover:underline pt-10">
            &larr; Go back to all blogs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <img 
            src={post.imageSrc} 
            alt={post.title} 
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-md mb-6" 
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-8 text-sm text-gray-500">
            <p>By Author Name</p>
            <p>August 8, 2025</p>
          </div>
          
          {/* Dynamically render the blog content from the data */}
          <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
