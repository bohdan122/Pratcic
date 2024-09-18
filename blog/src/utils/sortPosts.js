export const sortPosts = (posts, sortBy) => {
    switch (sortBy) {
      case 'date':
        return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'title':
        return [...posts].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return posts;
    }
  };