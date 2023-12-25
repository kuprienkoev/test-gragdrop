import { useState, useRef } from 'react';

import './Header.css';
import { MenuButton } from '../MenuButton/MenuButton.jsx';
import { useClickOutside } from '../../hooks/useClickOutside.js';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 150);
  });

  /*   useEffect(() => {
    let startTouchX = 0;
    document.addEventListener('touchstart', (event) => {
      startTouchX = event.changedTouches[0].pageX;
      console.log(startTouchX);
    });
  }, []); */

  return (
    <header className="header">
      <span className="header__logo">Logo1</span>
      <nav className={`header__nav   ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <ul className="header__nav-list">
          <li className="header__nav-item">Main</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Address</li>
          <li className="header__nav-item">Contact</li>
          <li className="header__nav-item">Login</li>
        </ul>
      </nav>
      <MenuButton isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
