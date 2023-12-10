export const encryptThis = (str) => {
    if (!str) {
        return '';
    }
    const words = str.split(' ');
    let result = [];
    words.forEach(word => {
        const letters = word.split('');
        const charNum = letters.shift()?.charCodeAt(0);
        const firstChar = letters.shift() || '';
        const lastChar = letters.pop() || '';
        result.push(`${charNum}${lastChar}${letters.join('')}${firstChar}`);
    });
    return result.join(' ') || '';
};
console.log(encryptThis('hello world'));
//# sourceMappingURL=Encrypt%20this.js.map