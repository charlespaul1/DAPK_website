import { useState } from 'react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='header'>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <h1>DAC</h1>
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`times-icon ${isMenuOpen ? '' : 'hide'}`} onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>
        <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
          <a href="#home" onClick={closeMenu}><li>Home</li></a>
          <a href="#about" onClick={closeMenu}><li>About</li></a>
          <a href="#register" onClick={closeMenu}><li>Register</li></a>
          <a href="#donate" onClick={closeMenu}><li>Donate</li></a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
