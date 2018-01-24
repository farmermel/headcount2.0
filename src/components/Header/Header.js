import React from 'react';
import Search from "../Search/Search";
import './Header.css';

const Header = ({searchDistricts}) => {
  return (
    <header>
      <h1>HeadCount2.0</h1>
      <Search searchDistricts={searchDistricts} />
    </header>
  );
};

export default Header;