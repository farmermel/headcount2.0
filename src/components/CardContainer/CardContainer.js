import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ districts }) => {
  const allDistricts = districts.map( district => (
    <Card {...district} key={district.location} />
  ));

  return <div>{allDistricts}</div>;
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
