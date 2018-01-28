import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ location, data, compare, selected }) => {
  const dataArray = Object.keys(data).map(year => {
    const klassName = data[year] > 0.5 ? 'above' : 'below';

    return (
      <li key={year}>
        {year}: <span className={klassName}>{data[year]}</span>
      </li>
    );
  });

  return (
    <div className={`card ${selected && 'highlight'}`}
         onClick={() => compare(location)}>
      <h3>{location}</h3>
      <ul>{dataArray}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.number),
  compare: PropTypes.func
};

export default Card;
