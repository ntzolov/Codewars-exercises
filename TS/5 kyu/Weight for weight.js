"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderWeight = void 0;
function orderWeight(str) {
    // const resultArray: Weight[] = []
    // const numbersArray = str.split(' ')
    // for (const num of numbersArray) {
    //   const digits = num.split('');
    //   let sum: number = 0
    //   for (const digit of digits) {
    //     sum += Number(digit)
    //   }
    //   resultArray.push({ number: num, sum })
    // }
    // let finalResult: number[] = []
    // const sortedResult = resultArray.sort((a, b) => a.sum - b.sum || a.number.length - b.number.length);
    // sortedResult.forEach(x => {
    //   finalResult.push(Number(x.number))
    // })
    // return finalResult.join(' ')
    return str.split(' ').sort((a, b) => a.split('').reduce((acc, curr) => acc + Number(curr), 0) - b.split('').reduce((acc, curr) => acc + Number(curr), 0) || a.localeCompare(b)).join(' ');
}
exports.orderWeight = orderWeight;
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
