import React from 'react';

const Card = ({location, data}) => {
  const dataArray = Object.keys(data).map( year => {
    const klassName = data[year] > 0.5 ? 'above' : 'below';

    return <li key={year} className={klassName}>{year}: {data[year]}</li>
    }
  )
  
  return (
    <div>
      {location}
      <ul>{dataArray}</ul>
    </div>
  );
};

export default Card;