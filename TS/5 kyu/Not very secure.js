"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumeric = void 0;
function alphanumeric(string) {
    const regex = new RegExp(/[^a-zA-Z0-9]/g);
    return !regex.test(string);
}
exports.alphanumeric = alphanumeric;
console.log(alphanumeric('abv'));
