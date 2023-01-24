function createPhoneNumber(numbers) {
  let result = '';
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      result += `(${numbers[i]}`;
    } else if (i === 1) {
      result += `${numbers[i]}`;
    } else if (i === 2) {
      result += `${numbers[i]})`;
    } else if (i === 3) {
      result += ` ${numbers[i]}`;
    } else if (i === 4) {
      result += `${numbers[i]}`;
    } else if (i === 5) {
      result += `${numbers[i]}`;
    } else if (i === 6) {
      result += `-${numbers[i]}`;
    } else if (i === 7) {
      result += `${numbers[i]}`;
    } else if (i === 8) {
      result += `${numbers[i]}`;
    } else if (i === 9) {
      result += `${numbers[i]}`;
    } 
  }
  return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
