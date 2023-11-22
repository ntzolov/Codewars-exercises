"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPairs = void 0;
function sumPairs(ints, s) {
    const seen = new Set();
    for (const n of ints) {
        if (seen.has(s - n))
            return [s - n, n];
        seen.add(n);
    }
}
exports.sumPairs = sumPairs;
console.log(sumPairs([4, 4, 3, 3, 4], 6));
