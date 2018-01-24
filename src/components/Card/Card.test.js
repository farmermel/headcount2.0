import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper;
  const mockData = { 2014: 0.4,
      2015: 0.8 };

  beforeEach( () => {
    wrapper = shallow(<Card location='Montana'
                            data={ mockData } />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should receive className based on value of data above/below 0.5', () => {
    expect(wrapper.find('.above').length).toEqual(1);
    expect(wrapper.find('.below').length).toEqual(1);
    //is there a not dumb way to be explicit about the values
  })
})