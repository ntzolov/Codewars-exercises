let countBits = function (n) {
  let binary = '';
  while (n > 0) {
    if (n % 2 === 0) {
      binary += 0;
      n = n / 2;
    } else {
      binary += 1;
      for (let i = n; i >= 0; i--) {
        if (i % 2 === 0) {
          n = i / 2;
          break;
        }
      }
    }
  }
  let result = binary.split('')
  let sum = 0
  for (const el of result) {
    if (+el === 1) {
      sum += +el
    }
  }
  return sum
};

countBits(1234)
// console.log(countBits(1234));
