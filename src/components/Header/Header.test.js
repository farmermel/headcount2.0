import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  const mockSearch = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<Header searchDistricts={mockSearch} />);
    expect(wrapper).toMatchSnapshot();
  });
});
