export function validBraces(braces) {
    let openBraces = [];
    let result = true;
    for (let letter of braces) {
        if (letter === ')') {
            if (openBraces[openBraces.length - 1] === '(') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else if (letter === ']') {
            if (openBraces[openBraces.length - 1] === '[') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else if (letter === '}') {
            if (openBraces[openBraces.length - 1] === '{') {
                openBraces.pop();
            }
            else {
                result = false;
                break;
            }
        }
        else {
            openBraces.push(letter);
        }
    }
    if (openBraces.length) {
        result = false;
    }
    return result;
}
console.log(validBraces(''));
//# sourceMappingURL=Valid%20braces.js.map