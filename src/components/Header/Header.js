import React from 'react';
import Search from '../Search/Search';
import check from '../../images/sign.svg';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ searchDistricts }) => {
  return (
    <header>
      <div className="header-wrap">
        <img src={check} alt="check" className="check-icon" />
        <h1 className="title">HeadCount2.0</h1>
      </div>
      <Search searchDistricts={searchDistricts} />
    </header>
  );
};

Header.propTypes = {
  searchDistricts: PropTypes.func.isRequired
};

export default Header;
