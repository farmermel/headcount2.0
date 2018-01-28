import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from './ComparisonContainer';
import { shallow } from 'enzyme';

describe('ComparisonContainer', () => {
  let wrapper;
  let compare = jest.fn();
  const mockDistricts = [{cow: 'moo'}];
  const mockCompAnalysis = { cow: {otherCow: 'mooooo'}};

  it('should match the snapshot', () => {
    wrapper = shallow(<ComparisonContainer districts={mockDistricts}
                                           compare={compare}
                                           comparativeAnalysis={mockCompAnalysis}/>)
    expect(wrapper).toMatchSnapshot();
  })
})