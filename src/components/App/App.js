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
      comparison: {},
      comparativeAnalysis: {}
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
    keys.length === 2 && this.comparativeAnalysis();
    this.setState({ comparison });
  }

  handleClick = district => {
    district = this.state.districtRepository.findByName(district);
    district.avg = this.findAverage(district.location);
    this.toggleCompare(district);
  };

  comparativeAnalysis = () => {
    const districtKeys = Object.keys(this.state.comparison);  
    const avg = this.state.districtRepository.compareDistrictAverages(districtKeys[0], districtKeys[1])
    this.setState({comparativeAnalysis: avg});
  }

  findAverage(district) {
    let avg = this.state.districtRepository.findAverage(district);
    return avg;
  }

  render() {
    return (
      <div>
        <Header searchDistricts={this.searchDistricts} />
        <ComparisonContainer
          districts={this.state.comparison}
          compare={this.handleClick}
          comparativeAnalysis={this.state.comparativeAnalysis}
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
