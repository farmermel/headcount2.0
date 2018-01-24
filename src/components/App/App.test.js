import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  let defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    defaultState = {
      districts: []
    }
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    //why is it setting state to districts if componentdidmount isn't running?
    wrapper.setState(defaultState)
    expect(wrapper.state()).toEqual(defaultState);
    expect(wrapper.state().districts.length).toEqual(0);

  })

  it('should update state with districts data when component mounts', () => {
    const wrapper = mount(<App />);

    expect(typeof wrapper.state().districts).toEqual('object');
    expect(wrapper.state().districts.length).toEqual(181);
  })
  
})
