import React from 'react';

const ComparisonCard = ({ districts, comparativeAnalysis}) => {    
  console.log('compAn:', comparativeAnalysis)
  const district1key = Object.keys(districts)[0];
  const district2key = Object.keys(districts)[1];

  const district1 = district1key ? `: ${districts[district1key].avg}` : 'Pick first card to compare';
  const district2 = district2key ? `: ${districts[district2key].avg}` : 'Pick second card to compare';
  const analysis = comparativeAnalysis.compared ? comparativeAnalysis.compared : ''
  
  return (
    <div className="card">
      <h3>{district1key} {district1}</h3>
      <h3>{analysis}</h3>
      <h3>{district2key} {district2}</h3>
    </div>
  );
};

export default ComparisonCard;