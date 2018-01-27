import React from 'react';
import Card from '../Card/Card';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import './ComparisonContainer.css';

const ComparisonContainer = ({cards, compare}) => {
  // const selectedDistricts = cards.map( district => {
  const selectedDistricts = Object.keys(cards).map( district => {
    return <Card {...cards[district]} key={cards[district].location}
                                      compare={compare}
                                      selected={true} />
  })
  return (
    <div className="card-container"
         id="compare-container">
      {selectedDistricts[0]}
      <ComparisonCard />
      {selectedDistricts[1]}
    </div>
  );
};

export default ComparisonContainer;
