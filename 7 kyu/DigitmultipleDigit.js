function squareDigits(num){
  let result = '';
  num = String(num).split('')
  for (let i = 0; i < num.length; i++) {
    let temp = num[i] ** 2
    result += temp
  }
  return Number(result)
}