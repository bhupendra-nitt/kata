export const calculateSum = (inputString) => {
  const integerString = inputString.split(',');
  if(integerString.length === 0) return 0;
  return integerString.reduce((sum, current) => sum + sanitizeInput(current), 0);
}

export const sanitizeInput = (value) => {
  if (!Number.isInteger(parseInt(value)) || value < 0) return 0;
  return parseInt(value);
}