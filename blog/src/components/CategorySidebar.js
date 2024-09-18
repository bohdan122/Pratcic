import React from 'react';

function CategorySidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="category-sidebar">
      <h2>Categories</h2>
      <ul>
        <li 
          className={selectedCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          All Categories
        </li>
        {categories.map(category => (
          <li 
            key={category.id}
            className={selectedCategory === category.id ? 'active' : ''}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategorySidebar;