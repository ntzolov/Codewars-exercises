export function validISBN10(isbn) {
    const isInvalid = new RegExp(/[^0123456789X]/g);
    const values = isbn.split('');
    if (isInvalid.test(isbn) || values.length !== 10) {
        return false;
    }
    let total = 0;
    values.forEach((value, index) => {
        if (value === 'X' && index !== 9) {
            return false;
        }
        if (value === 'X') {
            total += (index + 1) * 10;
            return;
        }
        total += (index + 1) * Number(value);
    });
    return Boolean(!(total % 11));
}
validISBN10('X123456788');
//# sourceMappingURL=ISBN-10%20Validation.js.map