export default class DistrictRepository {
  constructor(rawData) {
    this.repositoryData = this.cleanData(rawData);
  }

  cleanData(rawData) {
    return rawData.reduce((cleanedData, dataPoint) => {
      const location = dataPoint.Location.toUpperCase();

      cleanedData[location] = {
        ...cleanedData[location],
        location: location
      };

      // eslint-disable-next-line id-blacklist
      cleanedData[location].data = {
        ...cleanedData[location].data,
        [dataPoint.TimeFrame]: Math.round(dataPoint.Data * 1000) / 1000 || 0
      };

      return cleanedData;
    }, {});
  }

  findByName(input = '') {
    return this.repositoryData[input.toUpperCase()];
  }

  findAllMatches(input) {
    const districtsArray = Object.keys(this.repositoryData).map( district => {
      return this.repositoryData[district];
    });

    if (!input) {
      return districtsArray;
    }

    return districtsArray.filter( district => {
      return district.location.includes(input.toUpperCase());
    });
  }
}
