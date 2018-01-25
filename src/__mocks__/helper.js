// Import this named export into your test file:
export const mockDistrictRepository = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { DistrictRepository: mockDistrictRepository };
});

export default mock;