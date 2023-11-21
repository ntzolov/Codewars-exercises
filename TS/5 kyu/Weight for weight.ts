export function orderWeight(str: string): string {
  return str.split(' ').sort((a, b) => a.split('').reduce((acc, curr) => acc + Number(curr), 0) - b.split('').reduce((acc, curr) => acc + Number(curr), 0) || a.localeCompare(b)).join(' ')
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));