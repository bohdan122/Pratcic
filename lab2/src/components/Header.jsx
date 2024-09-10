import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
const Header = () => {
  return (
    <header>
     <h1>Finsweet</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact" className="contact">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
