export function findUniq(arr: string[]): string {
  const toEqual = Array.from(new Set(arr.shift()?.toLowerCase().split(''))).sort().join('')

  if (toEqual !== Array.from(new Set(arr[0]?.toLowerCase().split(''))).sort().join('') && toEqual !== Array.from(new Set(arr[1]?.toLowerCase().split(''))).sort().join('')) {
    return String(toEqual)
  }

  const result = arr.find(el => Array.from(new Set(el.toLowerCase().split(''))).sort().join('') !== toEqual)

  return String(result)
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));