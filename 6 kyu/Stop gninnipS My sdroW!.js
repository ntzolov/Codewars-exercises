function spinWords(string){
  let result = [];
  let words = string.split(' ');
  for (let word of words) {
    if (word.length >= 5) {
      word = word.split('').reverse().join('')
    }
    result.push(word)
  }
  return result.join(' ')
}

console.log(spinWords("Hey wollef sroirraw"));