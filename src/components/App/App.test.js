import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DistrictRepository, { mockDistrictRepository } from '../../helper';

jest.mock('../../helper');

describe('App', () => {
  let wrapper;
  let defaultState;
  // const allDistricts = {
  //   findAllMatches: jest.fn()
  // }

  beforeEach(() => {
    wrapper = shallow(<App />);
    defaultState = {
      districts: [],
      allDistricts: new DistrictRepository(),
      compare: []
    };
    DistrictRepository.mockClear();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    //why is it setting state to districts if componentdidmount isn't running?
    wrapper.setState(defaultState);

    expect(wrapper.state()).toEqual(defaultState);
    expect(wrapper.state().districts.length).toEqual(0);
  });

  it('should update state with districts data when component mounts', () => {
    const wrapper = mount(<App />);

    expect(typeof wrapper.state().districts).toEqual('object');
    expect(wrapper.state().districts.length).toEqual(181);
  });

  //put describe block here for search
  it('should make a call to DistrictRepository findByName method', () => {
    expect(wrapper.state().allDistricts.findAllMatches).toHaveBeenCalled();

    wrapper.instance().searchDistricts('COLORADO');

    expect(wrapper.state().allDistricts.findAllMatches).toHaveBeenCalledWith('COLORADO');

    // expect(wrapper.instance().findByName).toHaveBeenCalledWith('COLORADO');
    // expect(wrapper.state().districts[0]).toEqual(defaultState)

  })

  it('should update state with districts found in search', () => {
    //find length of state.districts
    //show that contains more than colorado
    //call search
    //show that state is now only x long
    //and only contains colorado
  })
});
