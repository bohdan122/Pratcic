import React, { useState, useEffect } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination'; // Import the Pagination component
import { filterPostsByCategory } from '../utils/filterPosts';

function Categories() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('alphabetical-asc'); // Default sorting order
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); // Number of posts per page

  useEffect(() => {
    // Fetch posts and categories
    const fetchData = async () => {
      try {
        const postsResponse = await fetch('/data/posts.json');
        if (!postsResponse.ok) throw new Error('Posts data not found');
        
        const categoriesResponse = await fetch('/data/categories.json');
        if (!categoriesResponse.ok) throw new Error('Categories data not found');
        
        const postsData = await postsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        setPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to sort posts by either title or date
  const sortPosts = (posts, order) => {
    return [...posts].sort((a, b) => {
      if (order === 'alphabetical-asc') {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
      } else if (order === 'alphabetical-desc') {
        return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
      } else if (order === 'recent') {
        return new Date(b.date) - new Date(a.date); // Sort by most recent
      } else if (order === 'less-recent') {
        return new Date(a.date) - new Date(b.date); // Sort by less recent
      }
      return 0;
    });
  };

  const filteredPosts = selectedCategory
    ? filterPostsByCategory(posts, selectedCategory)
    : posts;

  const sortedPosts = sortPosts(filteredPosts, sortOrder);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="categories-page">
      <h1>Resources and insights</h1>
      <div className="categories-content">
        <div className="sidebar-sort-container">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="sort-options">
            <label htmlFor="sortOrder">Sort by: </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="alphabetical-asc">Alphabetical (A-Z)</option>
              <option value="alphabetical-desc">Alphabetical (Z-A)</option>
              <option value="recent">Most Recent</option>
              <option value="less-recent">Less Recent</option>
            </select>
          </div>
        </div>

        <div className="post-list">
          {currentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={sortedPosts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Categories;
