import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from "../Header/Header";
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: []
    };
  }

  componentDidMount() {
    const districts = new DistrictRepository(kinderData).findAllMatches();
    
    this.setState({ districts });
  }

  render() {
    return (
      <div>
        <Header />
        <CardContainer districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
