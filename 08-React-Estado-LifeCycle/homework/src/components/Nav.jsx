import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
      <nav className='barraNav'>
          <span className='weatherTitle'>Weather App</span>
          <Link to = "/About">
            <span className='weatherAbout'>About</span>
          </Link>
          <div className='bar'><SearchBar></SearchBar></div>
      </nav>
    );
  };

export default Nav;
