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
      compare: []
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

  handleClick = district => {
    const toCompare = this.state.districtRepository.findByName(district);
    toCompare.selected = !toCompare.selected;
    let compare = this.state.districts.filter(district => district.selected);
    compare.length > 2
      ? this.removefirstCard(compare)
      : this.setState({ compare });
  };

  removefirstCard = compareArray => {
    let firstCard = compareArray.shift();
    firstCard.selected = false;
    const districts = this.state.districts.map(district => {
      return district.location === firstCard.location
        ? (district = firstCard)
        : district;
    });
    this.setState({ compare: compareArray, districts });
  };

  render() {
    return (
      <div>
        <Header searchDistricts={this.searchDistricts} />
        <ComparisonContainer />
        <CardContainer
          districts={this.state.districts}
          compare={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
