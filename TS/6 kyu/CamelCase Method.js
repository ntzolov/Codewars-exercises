"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
function camelCase(str) {
    let words = str.split(' ');
    words = words.map(word => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                result += word[i].toUpperCase();
                continue;
            }
            result += word[i].toLowerCase();
        }
        return result;
    });
    return words.join('');
}
exports.camelCase = camelCase;
console.log(camelCase('camel case word'));
//# sourceMappingURL=CamelCase%20Method.js.map