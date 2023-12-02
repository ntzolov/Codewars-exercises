export function accum(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            result.push(s[i].toUpperCase());
        }
        else {
            result.push(`-${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}`);
        }
    }
    return result.join('');
}
console.log(accum('tzolov'));
//# sourceMappingURL=Mumbling.js.map