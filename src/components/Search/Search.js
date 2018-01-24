import React from 'react';

const Search = ({searchDistricts}) => {
  return (
    <div>
      <input type="text" placeholder="Search Districts" onChange={(e) => searchDistricts(e.target.value)}/>
    </div>
  );
};

export default Search;