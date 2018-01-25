import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ districts, compare }) => {
  const allDistricts = districts.map(district => (
    <Card {...district} key={district.location} compare={compare} />
  ));

  return <div className="card-container">{allDistricts}</div>;
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
