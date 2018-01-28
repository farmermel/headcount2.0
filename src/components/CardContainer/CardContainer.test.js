import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  const mockDistricts = [{cow: 'moo'}];
  const mockComparison = { cow: {otherCow: 7}};
  const mockCompare = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<CardContainer districts={mockDistricts}
                                     comparison={mockComparison}
                                     compare={mockCompare} />);
    expect(wrapper).toMatchSnapshot();
  })
})
