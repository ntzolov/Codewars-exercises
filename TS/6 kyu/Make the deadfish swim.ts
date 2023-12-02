export function parse(data: string): number[] {
  let result: number[] = [];
  const commands = data.split('');
  let currNum = 0

  for (let command of commands) {
    if (command === 'i') {
      currNum++
    } else if (command === 'd') {
      currNum--
    } else if (command === 's') {
      currNum *= currNum
    } else if (command === 'o') {
      result.push(currNum);
    }
  }

  return result
}

console.log(parse('iiisdoso'));