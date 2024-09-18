import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header-container'>
    <h1 class="header-title">Untitled UI</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;