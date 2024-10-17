export const calculateSum = (inputString, selectionType) => { //All, Even, Odd
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
  // return integerStrings.reduce((sum, current) => {
  //   sum + sanitizeInput(current.trim())
  // }, 0)
  // };

  switch (selectionType) {
    case 'Even':
      return integerStrings.reduce((sum, current, currentIndex) => {
        if(currentIndex % 2 === 0) {
         return sum + sanitizeInput(current.trim())
        } else {
          return sum;
        }
      }, 0)

    case 'Odd':
      let oddSum = 0;
      integerStrings.forEach((ele, index) => {
        if(index%2 !== 0) {
          oddSum = oddSum + sanitizeInput(ele);
        }
      })
      return oddSum;

    case 'All':
    default:
    return integerStrings.reduce((sum, current) =>
      sum + sanitizeInput(current.trim()), 0)
  }

  // return integerStrings.reduce((sum, current, currentIndex ) => {
  //   switch (selectionType) {
  //     case "All":
  //       return sum + sanitizeInput(current.trim());
  //       break;
  //     case 'Even':
  //
  //       break;
  //   }
  // }, 0)
}

export const sanitizeInput = (value) => {
  const parsedValue = parseInt(value, 10);
  if (!Number.isInteger(parsedValue)) return 0;
  return parsedValue;
}
