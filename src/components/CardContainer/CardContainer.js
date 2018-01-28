import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ districts, compare, comparison }) => {
  const allDistricts = districts.map(district => {
    comparison[district.location] 
      ? district.selected=true 
      : district.selected = false;
    return <Card {...district} key={district.location} compare={compare} />;
  });

  return <div className="card-container">{allDistricts}</div>;
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object),
  compare: PropTypes.func,
  comparison: PropTypes.objectOf(PropTypes.shape({
    avg: PropTypes.number,
    data: PropTypes.objectOf(PropTypes.number),
    location: PropTypes.string
  }))
};

export default CardContainer;
