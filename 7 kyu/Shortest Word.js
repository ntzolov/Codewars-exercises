function findShort(s) {
  let min = Number.MAX_SAFE_INTEGER;
  let newArr = s.split(' ');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length < min) {
      min = newArr[i].length;
    }
  }
  return min;
}