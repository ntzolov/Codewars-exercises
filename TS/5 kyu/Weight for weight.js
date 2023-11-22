"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderWeight = void 0;
function orderWeight(str) {
    return str.split(' ').sort((a, b) => a.split('').reduce((acc, curr) => acc + Number(curr), 0) - b.split('').reduce((acc, curr) => acc + Number(curr), 0) || a.localeCompare(b)).join(' ');
}
exports.orderWeight = orderWeight;
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
