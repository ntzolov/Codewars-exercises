export const encryptThis = (str) => {
    if (!str) {
        return '';
    }
    const words = str.split(' ');
    let result = [];
    words.forEach(word => {
        var _a;
        const letters = word.split('');
        const charNum = (_a = letters.shift()) === null || _a === void 0 ? void 0 : _a.charCodeAt(0);
        const firstChar = letters.shift() || '';
        const lastChar = letters.pop() || '';
        result.push(`${charNum}${lastChar}${letters.join('')}${firstChar}`);
    });
    return result.join(' ') || '';
};
console.log(encryptThis('hello world'));
//# sourceMappingURL=Encrypt%20this.js.map