import {calculateSum, sanitizeInput} from "../utils";
describe('calculateSum Function', () => {

  test('adds "1,2,3" to equal 6', () => {
    expect(calculateSum('1,2,3')).toBe(6);
  });

  test('adds " " to equal 0', () => {
    expect(calculateSum('')).toBe(0);
  });
});

describe('sanitizeInput Function', () => {

  test('should return 0 if "s" is passed', () => {
    expect(sanitizeInput('s')).toBe(0);
  });

  test('should return 0 if "1" is passed', () => {
    expect(sanitizeInput('1')).toBe(1);
  });
});

