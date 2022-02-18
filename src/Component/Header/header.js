import React from 'react';
import './header.scss';
import Navbar from "../NavBar/navbar";

const Header = ({ company }) => {
  return (
    <header>
      <span id="company-name" >{company}</span>
      <Navbar />
    </header>
  );
}


export default Header;