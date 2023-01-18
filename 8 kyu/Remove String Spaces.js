function noSpace(x) {
  let newStr = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] === ' ') {
      continue;
    } else {
      newStr += x[i];
    }
  }
  return newStr
}