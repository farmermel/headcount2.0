export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    const woot = data.reduce( (cleanedData, dataPoint) => {
      const location = dataPoint.Location.toUpperCase();
      if(!cleanedData[location]) {
        cleanedData[location] = {};
      }

      cleanedData[location].location = location;

      cleanedData[location].data = {
        ...cleanedData[location].data,
        [dataPoint.TimeFrame]: Math.round(dataPoint.Data * 1000) / 1000 || 0
      };
      
      return cleanedData;
    }, {}) 
    return woot
    
  }

  findByName(input = '') {
    input = input.toUpperCase();
    return this.data[input]
  }
}


// Colorado: {
//   Location: Colorado,
//   data: {
  //   2005: 0.3456245,
  //   2006: 0
  // }
//}