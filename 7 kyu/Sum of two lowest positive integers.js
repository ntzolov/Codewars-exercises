function sumTwoSmallestNumbers(numbers) {
  let newArr = numbers.sort(compareNumbers);
  console.log(newArr);
  return newArr[0] + newArr[1];

  function compareNumbers(a, b) {
    return a - b;
  }
}