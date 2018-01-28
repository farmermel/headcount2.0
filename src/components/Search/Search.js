import React from 'react';
import './Search.css';

const Search = ({searchDistricts}) => {
  return (
    <div className="search-wrap">
      <input type="text"
             placeholder="Search Districts"
             className="search"
             onChange={(e) => searchDistricts(e.target.value)} />
    </div>
  );
};

export default Search;