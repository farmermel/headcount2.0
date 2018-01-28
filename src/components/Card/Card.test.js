import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper;
  const mockData = { 
    2014: 0.4,
    2015: 0.8 
  };
  const mockCompare = jest.fn();
  let onClick = jest.fn();
  let mockDistrict = {
    "avg": 0.6, 
    "data": {
      "2003": 0.4, 
      "2004": 0.8}, 
    location: "COLORADO"
  }

  beforeEach( () => {
    wrapper = shallow(<Card location='COLORADO'
                            data={ mockData }
                            compare={mockCompare} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should receive className above/below based on value of data above/below 0.5', () => {
    expect(wrapper.find('.above').length).toEqual(1);
    expect(wrapper.find('.below').length).toEqual(1);
  })

  it('should call compare on click', () => {
    wrapper.find('.card').simulate('click');
    expect(mockCompare).toHaveBeenCalledWith('COLORADO');
  })
})