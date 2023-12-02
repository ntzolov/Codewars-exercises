"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inArray = void 0;
function inArray(a1, a2) {
    const result = [];
    a1.forEach(word => {
        let isIncluded = false;
        a2.forEach(word2 => {
            if (word2.includes(word)) {
                isIncluded = true;
                return;
            }
        });
        if (isIncluded) {
            result.push(word);
        }
    });
    return result;
}
exports.inArray = inArray;
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
//# sourceMappingURL=Which%20are%20in.js.map