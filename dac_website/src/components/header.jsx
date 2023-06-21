import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className="navbar">
        <div className="logo">
          <h1>DAC</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
         
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
