export function inArray(a1: string[], a2: string[]): string[] {
  const result: string[] = []

  a1.forEach(word => {
    let isIncluded = false
    a2.forEach(word2 => {
      if (word2.includes(word)) {
        isIncluded = true
        return
      }
    })
    if (isIncluded) {
      result.push(word)
    }
  })

  return result.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));