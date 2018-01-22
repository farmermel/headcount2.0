export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce( (cleanedData, dataPoint) => {
      if(!cleanedData[dataPoint.Location]) {
        cleanedData[dataPoint.Location] = {};
      }

      return cleanedData;
    }, {})
  }
}


// Colorado: {
//   Location: Colorado,
//   2005: 0.3456245,
//   2006:
// }