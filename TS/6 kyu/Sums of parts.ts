export function partsSums(ls: number[]): number[] {
  let result: number[] = [0];
  let total = 0



  for (let num of ls.reverse()) {
    total += num
    result.push(total)
  }

  result = result.reverse()

  return result
}

console.log(partsSums([0, 1, 3, 6, 10]));