export const filterPostsByCategory = (posts, categoryId) => {
    return posts.filter(post => post.categoryId === categoryId);
  };
  
  export const filterPostsBySearch = (posts, searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercasedTerm) ||
      post.content.toLowerCase().includes(lowercasedTerm)
    );
  };