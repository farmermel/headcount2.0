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
    comparison = this.findAverage(comparison, keys);
    keys.length === 2 && this.comparativeAnalysis();
    this.setState({ comparison });
  }

  handleClick = district => {
    district = this.state.districtRepository.findByName(district);
    this.toggleCompare(district);
  };

  comparativeAnalysis = () => {
    // if (Object.keys(this.state.comparison).length > 1) {
      const districtKeys = Object.keys(this.state.comparison)   
      const avg = this.state.districtRepository.compareDistrictAverages(districtKeys[0], districtKeys[1])
      this.setState({comparativeAnalysis: avg})    
    // }
  }

  findAverage(comparison, keys) {
    console.log('app keys:', keys)
    if ( keys.length > 1) {
      const avg2 = this.state.districtRepository.findAverage(keys[1])
      comparison[keys[1]].avg = avg2
    }

    const avg1 = this.state.districtRepository.findAverage(keys[0])
    comparison[keys[0]].avg = avg1 
    return comparison
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
