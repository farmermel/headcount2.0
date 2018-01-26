import React from 'react';
import Card from '../Card/Card';
import ComparisonCard from '../ComparisonCard/ComparisonCard';

const ComparisonContainer = ({cards, compare}) => {
  const selectedDistricts = cards.map( district => {
    return <Card {...district} key={district.location}
                               compare={compare} />
  })
  return (
    <div className="card-container">
      {selectedDistricts[0]}
      <ComparisonCard />
      {selectedDistricts[1]}
    </div>
  );
};

export default ComparisonContainer;
