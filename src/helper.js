/* eslint-disable id-blacklist */
export default class DistrictRepository {
  constructor(rawData) {
    this.data = this.cleanData(rawData);
  }

  cleanData(rawData) {
    return rawData.reduce((cleanedData, dataPoint) => {
      const location = dataPoint.Location.toUpperCase();

      cleanedData[location] = {
        ...cleanedData[location],
        location: location
      };

      cleanedData[location].data = {
        ...cleanedData[location].data,
        [dataPoint.TimeFrame]: this.roundToThousandth(dataPoint.Data) || 0
      };

      return cleanedData;
    }, {});
  }

  findByName(input = '') {
    return this.data[input.toUpperCase()];
  }

  findAllMatches(input) {
    const districtsArray = Object.keys(this.data).map(district => {
      return this.data[district];
    });

    if (!input) {
      return districtsArray;
    }

    return districtsArray.filter(district => {
      return district.location.includes(input.toUpperCase());
    });
  }

  findAverage(district) {
    district = district.toUpperCase();
    const keys = Object.keys(this.data[district].data);
    const sum = keys.reduce((total, year) => {
      total += this.data[district].data[year];
      return total;
    }, 0);

    return this.roundToThousandth(sum / keys.length);
  }

  findRatio(district1, district2) {
    const avg1 = this.findAverage(district1);
    const avg2 = this.findAverage(district2);

    return this.roundToThousandth(avg1 / avg2);
  }

  roundToThousandth(number) {
    return Math.round(number * 1000) / 1000;
  }

  compareDistrictAverages(district1, district2) {
    const avg = {
      [district1.toUpperCase()]: this.findAverage(district1),
      [district2.toUpperCase()]: this.findAverage(district2),
      compared: this.findRatio(district1, district2)
    };

    return avg;
  }
}
