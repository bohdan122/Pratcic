import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      // In a real app, you'd fetch a single post by ID
      const response = await fetch('/data/posts.json');
      const posts = await response.json();
      const foundPost = posts.find(p => p.id === parseInt(id));
      setPost(foundPost);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <article className="post-detail">
      <header>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </header>
      <div className='post-iamge-container'>
      <img src={post.image} alt={post.title} className="post-image" />
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default PostDetail;