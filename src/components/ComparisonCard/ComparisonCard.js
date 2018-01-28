import React from 'react';
import PropTypes from 'prop-types';
import './ComparisonCard.css';

const ComparisonCard = ({ districts, comparativeAnalysis}) => {    
  const district1key = Object.keys(districts)[0];
  const district2key = Object.keys(districts)[1];
  const district1 = district1key ? `: ${districts[district1key].avg}` : 'Pick first card to compare';
  const district2 = district2key ? `: ${districts[district2key].avg}` : 'Pick second card to compare';
  const analysis = comparativeAnalysis.compared ? comparativeAnalysis.compared : ''
  
  return (
    <div className="card comparison-card">
      <h3>{district1key} {district1}</h3>
      <h3>{analysis}</h3>
      <h3>{district2key} {district2}</h3>
    </div>
  );
};

ComparisonCard.propTypes = {
  districts: PropTypes.objectOf(PropTypes.shape({
    avg: PropTypes.number,
    data: PropTypes.objectOf(PropTypes.number),
    location: PropTypes.string
  })),
  comparativeAnalysis: PropTypes.objectOf(PropTypes.number)
}

export default ComparisonCard;