"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => {
    const punctuation = [',', '.', '?', '!', ' '];
    return a
        .split(' ')
        // .filter(x => x.length)
        .map(x => {
        if (!x) {
            return x;
        }
        if (!punctuation.includes(String(x))) {
            let letters = x.split('');
            let first = letters.shift();
            let newWord = letters.join('') + first + 'ay';
            return newWord;
        }
        else {
            return x;
        }
    })
        .join(' ');
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('OoZXPisciLUNj         jEaEyfGLKCYxvto aiEYFFTqIQ IELDvTMev WjO'));
//# sourceMappingURL=Simple%20pig%20latin.js.map