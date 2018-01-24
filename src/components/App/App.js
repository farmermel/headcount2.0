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
      allDistricts: {},
      compare: []
    };
  }

  componentDidMount() {
    const allDistricts = new DistrictRepository(kinderData);
    const districts = allDistricts.findAllMatches();

    this.setState({ districts, allDistricts });
  }

  searchDistricts = input => {
    const districts = this.state.allDistricts.findAllMatches(input);

    this.setState({ districts });
  };

  handleClick = (district) => {
    const toCompare = this.state.allDistricts.findByName(district);
    this.setState({compare: [...this.state.compare, toCompare]})
  }
  
  render() {
    return (
      <div>
        <Header searchDistricts={this.searchDistricts} />
        <ComparisonContainer />
        <CardContainer districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
