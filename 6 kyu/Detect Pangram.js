function isPangram(string) {
  string = string.toLowerCase().split('');
  let alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();

  for (let letter of string) {
    if (alphabet.includes(letter)) {
      alphabet.splice(alphabet.indexOf(letter), 1)
    }
  }
  console.log(alphabet);
  return alphabet.length > 0 ? false : true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
