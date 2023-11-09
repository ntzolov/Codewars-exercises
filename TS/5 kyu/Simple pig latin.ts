export const pigIt = (a: string): string => {
  const punctuation = [',', '.', '?', '!', ' ']
  return a
    .split(' ')
    // .filter(x => x.length)
    .map(x => {
      if (!x) {
        return x
      }

      if (!punctuation.includes(String(x))) {
        let letters = x.split('')
        let first = letters.shift();
        let newWord = letters.join('') + first + 'ay'
        return newWord
      } else {
        return x
      }
    })
    .join(' ')
}

console.log(pigIt('OoZXPisciLUNj         jEaEyfGLKCYxvto aiEYFFTqIQ IELDvTMev WjO'));