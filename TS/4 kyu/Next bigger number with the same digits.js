"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger = void 0;
function nextBigger(n) {
    let digits = String(n);
    let digitsArray = digits.split('');
    let length = digitsArray.length;
    let result = -1;
    console.log(digitsArray);
    for (let i = n + 1; i > 0; i++) {
        let newDigits = String(i);
        let newDigitsArray = newDigits.split('');
        let template = digitsArray.slice();
        for (let digit of newDigitsArray) {
            if (template.includes(digit)) {
                let index = template.findIndex(x => x === digit);
                template.splice(index, 1);
            }
        }
        if (!template.length) {
            result = i;
            break;
        }
    }
    return result;
}
exports.nextBigger = nextBigger;
console.log(nextBigger(513));
