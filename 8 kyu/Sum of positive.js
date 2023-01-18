function positiveSum(arr) {
  let result = 0;
  for (let el of arr) {
    if (el > 0) {
      result += el
    }
  }
  return result
}