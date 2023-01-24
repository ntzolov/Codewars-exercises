function duplicateCount(text) {
  let toLowerCase = text
    .toLowerCase()
    .split('')
    .filter((el, index) => index !== text.indexOf(el));
  let result = new Set(toLowerCase);
  return result.size;
}

console.log(duplicateCount('aAbbbbcde'));
