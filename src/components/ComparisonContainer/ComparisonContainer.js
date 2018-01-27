import React from 'react';
import Card from '../Card/Card';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import './ComparisonContainer.css';

const ComparisonContainer = ({ districts, compare }) => {
  const selectedDistricts = Object.keys(districts).map(district => {
    return (
      <Card
        {...districts[district]}
        key={districts[district].location}
        compare={compare}
        selected={true}
      />
    );
  });
  return (
    <div className="card-container" id="compare-container">
      {selectedDistricts[0]}
      <ComparisonCard />
      {selectedDistricts[1]}
    </div>
  );
};

export default ComparisonContainer;
