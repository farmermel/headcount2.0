import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from './ComparisonContainer';
import { shallow } from 'enzyme';

describe('ComparisonContainer', () => {
  let wrapper;
  let compare = jest.fn();
  const mockDistricts = { object1: { cow: 'moo' }, object2: { duck: 'quack' } };
  const mockCompAnalysis = { cow: 9, duck: 1 };
  it('should match the snapshot', () => {
    wrapper = shallow(
      <ComparisonContainer
        districts={mockDistricts}
        compare={compare}
        comparativeAnalysis={mockCompAnalysis}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
