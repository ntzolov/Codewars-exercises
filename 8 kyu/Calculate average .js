function findAverage(array) {
  let sum = 0;
  for (let el of array) {
    sum += el;
  }
  if (sum === 0) {
    return 0
  } else {
  return sum / array.length
    }
}