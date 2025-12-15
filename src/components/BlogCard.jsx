// src/components/BlogCard.jsx
import React from 'react';import { Helmet } from "react-helmet-async"; 
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blogs/${post.slug}`} >
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          className="h-48 w-full object-cover"
          src={post.image}
          alt={post.title}
        />
        <div className="p-4">
          {/* <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {post.tag}
          </span> */}
          <h3 className="mt-2 text-lg font-bold text-gray-800">
            {post.title}
          </h3>
          <p className="mt-1 text-gray-600 text-sm">
            {post.shortDescription}
          </p>
          <p className="text-gray-400 text-xs mt-3">{post.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;