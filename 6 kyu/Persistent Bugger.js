function persistence(num) {
  num = num.toString();
  let counter = 0

  while (num.length > 1) {
    solve(num)
  }

  function solve(anyNumber) {
    counter++
    let result = 1;
    for (let number of num) {
      result *= +number;
    }
    num = result.toString();
  }

  return counter
}

console.log(persistence(39));
