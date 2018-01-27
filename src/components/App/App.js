import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      districtRepository: {},
      comparison: {}
    };
  }

  componentDidMount() {
    const districtRepository = new DistrictRepository(kinderData);
    const districts = districtRepository.findAllMatches();

    this.setState({ districts, districtRepository });
  }

  searchDistricts = input => {
    const districts = this.state.districtRepository.findAllMatches(input);

    this.setState({ districts });
  };

  removeDuplicates(district) {
    let comparison = this.state.comparison;
    let location = district.location;

    comparison[location]
      ? delete comparison[location]
      : (comparison[location] = district);

    return comparison;
  }

  toggleCompare(district) {
    let comparison = this.removeDuplicates(district);
    let keys = Object.keys(comparison);

    keys.length > 2 && delete comparison[keys[1]];

    this.setState({ comparison });
  }

  handleClick = district => {
    let comparison = this.state.comparison;

    district = this.state.districtRepository.findByName(district);
    this.toggleCompare(district);
  };

  render() {
    return (
      <div>
        <Header searchDistricts={this.searchDistricts} />
        <ComparisonContainer
          districts={this.state.comparison}
          compare={this.handleClick}
        />
        <CardContainer
          comparison={this.state.comparison}
          districts={this.state.districts}
          compare={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
