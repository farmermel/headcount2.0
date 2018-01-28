import React from 'react';
import ReactDom from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  const mockSearchDistricts = jest.fn();

  it('should match the snapshot', () => {
    const wrapper = shallow(<Search searchDistricts={mockSearchDistricts} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call searchDisctricts on change passing in the input values', () => {
    const wrapper = shallow(<Search searchDistricts={mockSearchDistricts} />);
    const mockEvent = { target: { value: 'Chicken' } };
    wrapper.find('.search').simulate('change', mockEvent);
    expect(mockSearchDistricts).toHaveBeenCalledWith('Chicken');
  });
});
