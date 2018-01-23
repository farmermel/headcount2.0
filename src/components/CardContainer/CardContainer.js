import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ districts }) => {
  const allDistricts = districts.map(district => (
    <Card {...district} key={district.location} />
  ));

  return <div>{allDistricts}</div>;
};

export default CardContainer;
