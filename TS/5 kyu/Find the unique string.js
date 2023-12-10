"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniq = void 0;
function findUniq(arr) {
    var _a, _b, _c;
    var toEqual = Array.from(new Set((_a = arr.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase().split(''))).sort().join('');
    if (toEqual !== Array.from(new Set((_b = arr[0]) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(''))).sort().join('') && toEqual !== Array.from(new Set((_c = arr[1]) === null || _c === void 0 ? void 0 : _c.toLowerCase().split(''))).sort().join('')) {
        return String(toEqual);
    }
    var result = arr.find(function (el) { return Array.from(new Set(el.toLowerCase().split(''))).sort().join('') !== toEqual; });
    return String(result);
}
exports.findUniq = findUniq;
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
