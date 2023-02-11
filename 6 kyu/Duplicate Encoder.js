function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = [];
  for (let symbol of word) {
    let counter = 0;
    for (let currSymbol of word) {
      if (symbol === currSymbol) {
        counter++;
      }
    }
    if (counter > 1) {
      result.push(')');
    } else {
      result.push('(');
    }
  }
  return result.join('');
}

console.log(duplicateEncode('Success'));
