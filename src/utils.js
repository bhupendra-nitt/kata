export const calculateSum = (inputString) => {
  let delimiter = ',';
  let numbers = inputString;

  // Check for custom delimiter
  if (inputString.startsWith('//')) {
    const delimiterEnd = inputString.indexOf('\\n');
    if (delimiterEnd !== -1) {
      delimiter = inputString.substring(2, delimiterEnd);
      numbers = inputString.substring(delimiterEnd + 2);  // +2 to skip '\\n'
    }
  }

  const integerStrings = numbers.split(delimiter);

  if (integerStrings.length === 0) return 0;
  const negativeNumbers = integerStrings.filter(ele => sanitizeInput(ele) < 0);
  if(negativeNumbers.length >0 ){
    return `Negative numbers not allowed ${negativeNumbers.join(',')}`;
  }
  return integerStrings.reduce((sum, current) => sum + sanitizeInput(current.trim()), 0);
}

export const sanitizeInput = (value) => {
  const parsedValue = parseInt(value, 10);
  if (!Number.isInteger(parsedValue)) return 0;
  return parsedValue;
}
