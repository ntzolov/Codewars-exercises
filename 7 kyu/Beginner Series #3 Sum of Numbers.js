function getSum(a, b) {
  if (a !== b) {
    let sum = 0;
    let x = Math.min(a, b);
    let y = Math.max(a, b);
    for (let i = x; i <= y; i++) {
      sum += i;
    }
    return sum;
  } else {
    return a;
  }
}