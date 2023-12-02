"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partsSums = void 0;
function partsSums(ls) {
    let result = [0];
    let total = 0;
    for (let num of ls.reverse()) {
        total += num;
        result.push(total);
    }
    result = result.reverse();
    return result;
}
exports.partsSums = partsSums;
console.log(partsSums([0, 1, 3, 6, 10]));
//# sourceMappingURL=Sums%20of%20parts.js.map