export const calculateSum = (inputString) => {
  const integerString = inputString.split(',');
  return integerString.reduce((sum, current) => sum + parseInt(current), 0);
}