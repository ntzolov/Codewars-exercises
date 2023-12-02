export function alphanumeric(string) {
    const regex = new RegExp(/[^a-zA-Z0-9]/g);
    if (string === '') {
        return false;
    }
    return !regex.test(string);
}
console.log(alphanumeric('abv'));
//# sourceMappingURL=Not%20very%20secure.js.map