"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
function parse(data) {
    let result = [];
    const commands = data.split('');
    let currNum = 0;
    for (let command of commands) {
        if (command === 'i') {
            currNum++;
        }
        else if (command === 'd') {
            currNum--;
        }
        else if (command === 's') {
            currNum *= currNum;
        }
        else if (command === 'o') {
            result.push(currNum);
        }
    }
    return result;
}
exports.parse = parse;
console.log(parse('iiisdoso'));
//# sourceMappingURL=Make%20the%20deadfish%20swim.js.map