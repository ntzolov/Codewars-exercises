function order(words) {
  if (!words) {
    return '';
  }

  words = words.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(0);
  }

  for (let word of words) {
    for (let symbol of word) {
      if (Number(symbol)) {
        let index = Number(symbol) - 1;
        result.splice(index, 1);
        result.splice(index, 0, word);
      }
    }
  }
  return result.join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
