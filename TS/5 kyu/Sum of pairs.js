export function sumPairs(ints, s) {
    const seen = new Set();
    for (const n of ints) {
        if (seen.has(s - n))
            return [s - n, n];
        seen.add(n);
    }
}
console.log(sumPairs([4, 4, 3, 3, 4], 6));
//# sourceMappingURL=Sum%20of%20pairs.js.map