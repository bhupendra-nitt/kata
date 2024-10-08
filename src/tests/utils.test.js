import {calculateSum, sanitizeInput} from "../utils";
describe('calculateSum Function', () => {

  test('adds "1,2,3" to equal 6', () => {
    expect(calculateSum('1,2,3')).toBe(6);
  });

  test('adds " " to equal 0', () => {
    expect(calculateSum('')).toBe(0);
  });

  test('adds "1/n,2,3,4\n" to equal 6', () => {
    expect(calculateSum('1/n,2,3,4\n')).toBe(10);
  });
  test('adds "1, \n" to equal 1', () => {
    expect(calculateSum('1, \n')).toBe(1);
  });
  test('adds "//;\n1;2;3" to equal to 6', () => {
    expect(calculateSum('//;\\n1;2;3;')).toBe(6);
  });
  test('adds "//**\n1;2;3" to equal to 6', () => {
    expect(calculateSum('//**\\n1**2**3**')).toBe(6);
  });
});

describe('sanitizeInput Function', () => {

  test('should return 0 if "s" is passed', () => {
    expect(sanitizeInput('s')).toBe(0);
  });

  test('should return 1 if "1" is passed', () => {
    expect(sanitizeInput('1')).toBe(1);
  });
});

