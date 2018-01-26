import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DistrictRepository, { mockDistrictRepository } from '../../helper';

jest.mock('../../helper');

describe('App', () => {
  let wrapper;
  let defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    defaultState = {
      districts: [],
      districtRepository: new mockDistrictRepository(),
      compare: []
    };
    // DistrictRepository.mockClear();
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
    expect(wrapper.state().districts.length).toEqual(2);
  });

  describe('searchDistricts', () => {

    it('should make a call to DistrictRepository findByName method', () => {
      expect(wrapper.state().districtRepository.findAllMatches).toHaveBeenCalled();

      wrapper.instance().searchDistricts('COLORADO');

      expect(wrapper.state().districtRepository.findAllMatches).toHaveBeenCalledWith('COLORADO');
    })

    it('should update state with districts found in search', () => {
      expect(wrapper.state().districts.length).toEqual(2);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
      expect(wrapper.state().districts[1].location).toEqual('ASPEN 20');

      wrapper.instance().searchDistricts('COLORADO');

      expect(wrapper.state().districts.length).toEqual(1);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
    })
    
  })
});
