function XO(str) {
  str = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let el of str) {
    if (el === 'x') {
      x += 1;
    } else if (el === 'o') {
      o += 1;
    }
  }
  return x === o;
}