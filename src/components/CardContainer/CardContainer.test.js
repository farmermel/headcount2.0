import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  const mockDistricts = [{cow: 'moo'}]
  const mockCompare = [{otherCow: 'mooooo'}]

  it('should match the snapshot', () => {
    wrapper = shallow(<CardContainer districts={mockDistricts}
                                     compare={mockCompare} />);
    expect(wrapper).toMatchSnapshot();
  })
})
