import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {Link} from "react-router-dom";
import About from './About.jsx';
import './Nav.css';
import styled from "styled-components";

const Ab = styled.div`

`

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <Ab>
          About
        </Ab>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;

// function Nav({onSearch}) {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//         <span className="navbar-brand">
//           <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
//           Henry - Weather App
//         </span>
//         <SearchBar
//           onSearch={onSearch}
//         />
//     </nav>
//   );
// };

