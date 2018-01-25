import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ location, data, compare }) => {
  const dataArray = Object.keys(data).map(year => {
    const klassName = data[year] > 0.5 ? 'above' : 'below';

    return (
      <li key={year} 
          className={klassName}>
        {year}: {data[year]}
      </li>
    );
  });

  return (
    <div className='card'
         onClick={() => compare(location)}>
      <h3>{location}</h3>
      <ul>{dataArray}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.number)
};

export default Card;
