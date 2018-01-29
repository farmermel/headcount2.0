import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonCard from './ComparisonCard.js';
import { shallow } from 'enzyme';

describe('ComparisonCard', () => {
  let wrapper;
  let mockDistricts = {
    COLORADO: {
      avg: 0.4,
      data: {
        2004: 0.4,
        2005: 0.8
      },
      location: 'COLORADO'
    },
    ASPEN: {
      avg: 0.6,
      data: {
        2004: 0.6,
        2005: 0.9
      },
      location: 'ASPEN 20'
    }
  };
  let mockComparativeAnalysis = {
    'ACADEMY 20': 0.407,
    'YUMA SCHOOL DISTRICT 1': 0.909,
    compared: 0.448
  };

  it('should match snapshot', () => {
    wrapper = shallow(
      <ComparisonCard
        comparativeAnalysis={mockComparativeAnalysis}
        districts={mockDistricts}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
