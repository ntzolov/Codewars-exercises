export const high = (str: string): string => {
  interface Alphabet {
    [key: string]: number
  }

  const Alphabet: Alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }

  let highestScoreWord = {
    highestScoreWord: '',
    score: 0
  }
  const words = str.split(' ')

  words.forEach(word => {
    let currScore = 0
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      currScore += Alphabet[letter]
    }

    if (currScore > highestScoreWord.score) {
      highestScoreWord.score = currScore
      highestScoreWord.highestScoreWord = word
    }
  })

  return highestScoreWord.highestScoreWord
}

console.log(high('man i need a taxi up to ubud'));