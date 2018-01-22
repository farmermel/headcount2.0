export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((cleanedData, dataPoint) => {
      const location = dataPoint.Location.toUpperCase();

      cleanedData[location] = {
        ...cleanedData[location],
        location: location
      };

      cleanedData[location].data = {
        ...cleanedData[location].data,
        [dataPoint.TimeFrame]: Math.round(dataPoint.Data * 1000) / 1000 || 0
      };

      return cleanedData;
    }, {});
  }

  findByName(input = '') {
    return this.data[input.toUpperCase()];
  }

  findAllMatches(input) {
    const districtsArray = Object.keys(this.data).map( district => {
      return this.data[district];
    });

    if(!input) {
      return districtsArray;
    }

    return districtsArray.filter( district => {
      return district.location.includes(input.toUpperCase());
    });
  }
}
