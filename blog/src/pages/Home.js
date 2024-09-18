import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';

function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch posts from JSON file or API
    const fetchPosts = async () => {
      // Replace with actual fetch call
      const response = await fetch('/data/posts.json');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <h1><a href='#'>Our blog</a></h1>
      <h1>The latest writings from our team</h1>
      <h2>The latest industry news, interviews, technologies, and resources.</h2>
      <div className='input-container'>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="post-list">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;