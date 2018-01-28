// Import this named export into your test file:
export const mockDistrictRepository = jest.fn();

const districtsArray = [
  {
    location: 'COLORADO',
    data: {
      2003: 0.4,
      2004: 0.8
    }
  },
  {
    location: 'ASPEN 20',
    data: {
      2003: 0.7,
      2004: 0.9
    }
  }
]

const districtsObj = {
  COLORADO: {
    location: 'COLORADO',
    data: {
      2003: 0.4,
      2004: 0.8
    }
  },
  'ASPEN 20': {
    location: 'ASPEN 20',
    data: {
      2003: 0.7,
      2004: 0.9
    }
  }
}

const __findAllMatches = jest.fn().mockImplementation((input) => {
  if (!input) {
    return districtsArray;
  }

  return districtsArray.filter(district => {
    return district.location.includes(input.toUpperCase());
  });
})

const __findByName = jest.fn().mockImplementation((input) => {
  return districtsObj[input.toUpperCase()];
})

const __findAverage = jest.fn().mockImplementation((input) => {
  return 0.6;
})

const __findRatio = jest.fn().mockImplementation((district1, district2) => {
  return 0.6;
})

const __compareDistrictAverages = jest.fn().mockImplementation((district1, district2) => {
  const avg = {
    district1: 0.6,
    district2: 1,
    compared: 0.6
  };

  return avg;
})

const mock = jest.fn().mockImplementation(() => {
  return { findAllMatches: __findAllMatches,
           findByName: __findByName,
           findAverage: __findAverage,
           findRatio: __findRatio,
           compareDistrictAverages: __compareDistrictAverages,
           data: districtsArray };
});

export default mock;