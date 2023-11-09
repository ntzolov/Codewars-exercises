"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
function validBraces(braces) {
    let openBraces = [];
    let result = true;
    for (let letter of braces) {
        if (letter === ')') {
            if (openBraces[openBraces.length - 1] === '(') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else if (letter === ']') {
            if (openBraces[openBraces.length - 1] === '[') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else if (letter === '}') {
            if (openBraces[openBraces.length - 1] === '{') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else {
            openBraces.push(letter);
        }
    }
    if (openBraces.length) {
        result = false;
    }
    return result;
}
exports.validBraces = validBraces;
console.log(validBraces(''));
