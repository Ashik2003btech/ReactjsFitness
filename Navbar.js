// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/nameid">Form</Link></li>
        <li><Link to="/getstarted">Get Started</Link></li>
        <li><Link to="/bmi">BMI</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
