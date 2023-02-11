function solution(str) {
  if (!str) {
    return []
  }
  let result = []
  let array = str.split('');
  if (array.length % 2 !== 0) {
    array.push('_');
  }

  let count = 0;
  let tempString = ''
  for (let symbol of array) {
    count++
    if (count < 3) {
      tempString += symbol
    } else {
      result.push(tempString);
      count = 1
      tempString = symbol
    }
  }
  result.push(tempString);

  return result
}

console.log(solution(''));
