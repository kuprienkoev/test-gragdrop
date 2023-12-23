import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">Logo1</span>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">Main</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Address</li>
          <li className="header__nav-item">Contact</li>
          <li className="header__nav-item">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
