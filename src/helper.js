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
}
