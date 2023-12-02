"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptThis = void 0;
const encryptThis = (str) => {
    const words = str.split(' ');
    let result = [];
    words.forEach(word => {
        const letters = word.split('');
        // console.log(letters);
        const charNum = letters.shift()?.charCodeAt(0);
        const firstChar = letters.shift();
        const lastChar = letters.pop();
        console.log(firstChar, lastChar);
        result.push(`${charNum}${lastChar}${letters.join('')}${firstChar}`);
    });
    return result.join(' ');
};
exports.encryptThis = encryptThis;
console.log((0, exports.encryptThis)('hello world'));
//# sourceMappingURL=Encrypt%20this.js.map