// IMPORTANT - Works only with small numbers if you don't have a quantum computer... :)

export function nextBigger(n: number): number {
  let digits = String(n);
  let digitsArray = digits.split('');
  let result = -1

  for (let i = n + 1; i > 0; i++) {
    let newDigits = String(i);
    let newDigitsArray = newDigits.split('');

    if (newDigitsArray.length > digitsArray.length) {
      break;
    }

    let template = digitsArray.slice()

    for (let digit of newDigitsArray) {
      if (template.includes(digit)) {
        let index = template.findIndex(x => x === digit)
        template.splice(index, 1)
      }
    }

    if (!template.length) {
      result = i
      break;
    }
  }

  return result
}

console.log(nextBigger(513));