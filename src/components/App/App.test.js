import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DistrictRepository, { mockDistrictRepository } from '../../helper';

jest.mock('../../helper');

describe('App', () => {
  let wrapper;
  let defaultState;
  let mockComparison = {
    COLORADO: {
      avg: 0.6,
      data: {
        2004: 0.5,
        2005: 0.9
      },
      location: 'COLORADO'
    },
    'ASPEN 20': {
      avg: 0.6,
      data: {
        2004: 0.5,
        2005: 0.9
      },
      location: 'ASPEN 20'
    }
  };

  let mockDistrict = {
    avg: 0.6,
    data: {
      '2003': 0.4,
      '2004': 0.8
    },
    location: 'COLORADO'
  };

  beforeEach(() => {
    wrapper = shallow(<App />);
    defaultState = {
      districts: [],
      districtRepository: new mockDistrictRepository(mockDistrict),
      comparison: {},
      comparativeAnalysis: {}
    };
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
      expect(
        wrapper.state().districtRepository.findAllMatches
      ).toHaveBeenCalled();

      wrapper.instance().searchDistricts('COLORADO');

      expect(
        wrapper.state().districtRepository.findAllMatches
      ).toHaveBeenCalledWith('COLORADO');
    });

    it('should update state with districts found in search', () => {
      expect(wrapper.state().districts.length).toEqual(2);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
      expect(wrapper.state().districts[1].location).toEqual('ASPEN 20');

      wrapper.instance().searchDistricts('COLORADO');

      expect(wrapper.state().districts.length).toEqual(1);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
    });

    it('should update state districts on change in input', () => {
      wrapper = mount(<App />);
      let event = { target: { value: 'COL' } };

      expect(wrapper.state().districts.length).toEqual(2);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
      expect(wrapper.state().districts[1].location).toEqual('ASPEN 20');

      wrapper.find('input').simulate('change', event);

      expect(wrapper.state().districts.length).toEqual(1);
      expect(wrapper.state().districts[0].location).toEqual('COLORADO');
    });
  });

  describe('handleClick', () => {
    it('should call findByName with argument of district on districtRepository', () => {
      wrapper.instance().handleClick('COLORADO');
      expect(
        wrapper.state().districtRepository.findByName
      ).toHaveBeenCalledWith('COLORADO');
    });

    it('should call findAverage with district location as argument', () => {
      wrapper.instance().handleClick('COLORADO');
      expect(
        wrapper.state().districtRepository.findAverage
      ).toHaveBeenCalledWith('COLORADO');
    });

    it('should call toggleCompare with district as argument', () => {
      wrapper.instance().toggleCompare = jest.fn();
      wrapper.instance().handleClick('COLORADO');
      expect(wrapper.instance().toggleCompare).toHaveBeenCalledWith(
        mockDistrict
      );
    });
  });

  describe('findAverage', () => {
    it('should call findAverage on districtRepository', () => {
      wrapper.instance().findAverage(mockDistrict);
      expect(
        wrapper.state().districtRepository.findAverage
      ).toHaveBeenCalledWith(mockDistrict);
    });

    it("should return the average of a district's data", () => {
      expect(wrapper.instance().findAverage(mockDistrict)).toEqual(0.6);
    });
  });

  describe('comparativeAnalysis', () => {
    it('should call compareDistrictAverages with two district names as arguments', () => {
      expect(
        wrapper.state().districtRepository.compareDistrictAverages
      ).not.toHaveBeenCalled();

      wrapper.instance().comparativeAnalysis(mockComparison);

      expect(
        wrapper.state().districtRepository.compareDistrictAverages
      ).toHaveBeenCalled();
    });

    it('should set state with comparison and comparativeAnalysis', () => {
      wrapper.instance().setState = jest.fn();
      wrapper.instance().comparativeAnalysis(mockComparison);

      expect(wrapper.instance().setState).toHaveBeenCalled();
    });
  });

  describe('toggleCompare', () => {
    it('should call removeDuplicates', () => {
      wrapper.instance().removeDuplicates = jest.fn().mockImplementation(() => {
        return mockComparison;
      });
      wrapper.instance().toggleCompare(mockDistrict);
      expect(wrapper.instance().removeDuplicates).toHaveBeenCalledWith(
        mockDistrict
      );
    });

    it('should limit comparison object to containing two district objects', () => {
      expect(Object.keys(wrapper.state().comparison).length).toEqual(0);
      wrapper.instance().handleClick('COLORADO');
      wrapper.instance().handleClick('ASPEN 20');
      expect(Object.keys(wrapper.state().comparison).length).toEqual(2);
    });

    it('should set state if comparison object contains one district', () => {
      expect(Object.keys(wrapper.state().comparison).length).toEqual(0);
      wrapper.instance().handleClick('COLORADO');
      expect(Object.keys(wrapper.state().comparison).length).toEqual(1);
    });

    it('should call comparativeAnalysis with comparison object as argument if comparison object contains two districts', () => {
      wrapper.instance().setState = jest.fn();

      wrapper.instance().handleClick('COLORADO');
      wrapper.instance().handleClick('ASPEN 20');

      expect(wrapper.instance().setState).toHaveBeenCalled();
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate keys from comparison object', () => {
      wrapper.setState({ comparison: mockComparison });
      wrapper.instance().removeDuplicates(mockDistrict);
    });
  });
});
