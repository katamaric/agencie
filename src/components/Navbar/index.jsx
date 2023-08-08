import React from 'react';
import { Link } from 'react-router-dom';
import LightToggle from '../LightToggle';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>

      <LightToggle />
    </nav>
  );
};

export default Navbar;
