export function rot13(str) {
    const textAsArray = str.split('');
    const result = [];
    for (const letter of textAsArray) {
        let char = letter.charCodeAt(0);
        if (char >= 65 && char <= 90) {
            char += 13;
            if (char > 90) {
                let diff = char % 90;
                char = 64 + diff;
            }
        }
        if (char >= 97 && char <= 122) {
            char += 13;
            if (char > 122) {
                let diff = char % 122;
                char = 96 + diff;
            }
        }
        result.push(String.fromCharCode(char));
    }
    return result.join('');
}
console.log(rot13('EBG13 rknzcyr.'));
//# sourceMappingURL=ROT13.js.map