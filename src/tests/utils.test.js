import {calculateSum} from "../utils";

test('adds "1,2,3" to equal 6', () => {
  expect(calculateSum('1,2,3')).toBe(6);
});
