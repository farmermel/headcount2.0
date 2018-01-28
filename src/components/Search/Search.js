import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ searchDistricts }) => {
  return (
    <div className="search-wrap">
      <input
        type="text"
        placeholder="Search Districts"
        className="search"
        onChange={e => searchDistricts(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  searchDistricts: PropTypes.func.isRequired
};

export default Search;
