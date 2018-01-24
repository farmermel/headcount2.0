import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  const mockDistricts = [{cow: 'moo'}]

  it('should match the snapshot', () => {
    wrapper = shallow(<CardContainer districts={mockDistricts} />);
    expect(wrapper).toMatchSnapshot();
  })
})
