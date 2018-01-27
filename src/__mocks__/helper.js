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

// function __findAllMatches(input) {
//   if (!input) {
//     return districtsArray;
//   }

//   return districtsArray.filter(district => {
//     return district.location.includes(input.toUpperCase());
//   });
// }

const __findAllMatches = jest.fn().mockImplementation((input) => {
  if (!input) {
    return districtsArray;
  }

  return districtsArray.filter(district => {
    return district.location.includes(input.toUpperCase());
  });
})

const __findByName = jest.fn().mockImplementation((input) => {
  return districtsArray[input.toUpperCase()];
})

const mock = jest.fn().mockImplementation(() => {
  return { findAllMatches: __findAllMatches,
           findByName: __findByName,
           data: districtsArray };
});

export default mock;