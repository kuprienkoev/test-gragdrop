import React, { useState } from 'react';
import { ReactComponent as Icon } from './menuIcon.svg';
import './Header.css';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <span className="header__logo">Logo1</span>
      <nav className={`header__nav   ${isOpen ? 'active' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">Main</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Address</li>
          <li className="header__nav-item">Contact</li>
          <li className="header__nav-item">Login</li>
        </ul>
      </nav>
      <button
        className="header__menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon />
      </button>
    </header>
  );
};

export default Header;
