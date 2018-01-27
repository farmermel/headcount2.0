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
      compare: {}
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
    let compare = this.state.compare;
    let location = district.location

    compare[location] 
      ?  delete compare[location]
      : compare[location] = district;

    return compare;
  }

  toggleCompare(district) {
    let compare = this.removeDuplicates(district)
    let keys = Object.keys(compare)

    keys.length > 2 && delete compare[keys[1]]

    this.setState({ compare })
  }

  handleClick = district => {
    let compare = this.state.compare;

    district = this.state.districtRepository.findByName(district);
    this.toggleCompare(district)
  };



  // removefirstCard = compareArray => {
  //   let firstCard = compareArray.shift();
  //   firstCard.selected = false;
  //   const districts = this.state.districts.map(district => {
  //     return district.location === firstCard.location
  //       ? (district = firstCard)
  //       : district;
  //   });
  //   this.setState({ compare: compareArray });
  // };

  render() {
    return (
      <div>
        <Header searchDistricts={this.searchDistricts} />
        <ComparisonContainer cards={this.state.compare} compare={this.handleClick} />
        <CardContainer
          districts={this.state.districts}
          compare={this.handleClick}
        />
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       districts: [],
//       districtRepository: {},
//       compare: []
//     };
//   }

//   componentDidMount() {
//     const districtRepository = new DistrictRepository(kinderData);
//     const districts = districtRepository.findAllMatches();

//     this.setState({ districts, districtRepository });
//   }

//   searchDistricts = input => {
//     const districts = this.state.districtRepository.findAllMatches(input);

//     this.setState({ districts });
//   };

//   toggleCompare(boolean) {
//     compare = [...compare, district];
//     compare.length > 2 && compare.shift();
//     this.setState({ compare })
//   }

//   checkDuplicates(district) {
//     let compare = this.state.compare;

//     return compare.find( dist => district !== dist)

//     //loop through compare array
//     //if district is already in array, take it out and set state
//     //somehow don't run rest of handle click if it's true???
//   }

//   handleClick = district => {
//     let compare = this.state.compare;

//     district = this.state.districtRepository.findByName(district);
//     this.toggleCompare(this.checkDuplicates(district))
//     // compare = [...compare, district];
//     // compare.length > 2 && compare.shift();
//     // this.setState({ compare })


//     // //if a card has been clicked before AND there are two cards
//     // //in compare, the card doesn't go into compare
//     // const toCompare = this.state.districtRepository.findByName(district);
//     // toCompare.selected = !toCompare.selected;
//     // let compare = this.state.districts.filter(district => district.selected);
//     // // compare.length > 2
//     // //   ? this.removefirstCard(compare)
//     // //   : this.setState({ compare });

//   };



//   removefirstCard = compareArray => {
//     let firstCard = compareArray.shift();
//     firstCard.selected = false;
//     const districts = this.state.districts.map(district => {
//       return district.location === firstCard.location
//         ? (district = firstCard)
//         : district;
//     });
//     this.setState({ compare: compareArray });
//   };

//   render() {
//     return (
//       <div>
//         <Header searchDistricts={this.searchDistricts} />
//         <ComparisonContainer cards={this.state.compare} compare={this.handleClick} />
//         <CardContainer
//           districts={this.state.districts}
//           compare={this.handleClick}
//         />
//       </div>
//     );
//   }
// }

export default App;
