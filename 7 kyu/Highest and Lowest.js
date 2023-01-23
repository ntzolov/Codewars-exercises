function highAndLow(numbers){
  numbers = numbers.split(' ')
  console.log(numbers);
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return String(`${max} ${min}`)
}