import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
    <div className='image-container'>
      <img src={post.image} alt={post.title} />
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <div className="post-meta">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
      <Link to={`/post/${post.id}`}>Read more</Link>
    </div>
  );
}

export default PostCard;