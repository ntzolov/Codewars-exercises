export const encryptThis = (str: string): string => {
  if (!str) {
    return ''
  }

  const words = str.split(' ')
  let result: string[] = []

  words.forEach(word => {
    const letters = word.split('')
    const charNum = letters.shift()?.charCodeAt(0)
    const firstChar = letters.shift() || ''
    const lastChar = letters.pop() || ''

    result.push(`${charNum}${lastChar}${letters.join('')}${firstChar}`)
  })

  return result.join(' ') || ''
}

console.log(encryptThis('hello world'));