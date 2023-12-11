export function makeLooper(str) {
    const arr = str.split('');
    let index = 0;
    return () => {
        const result = arr[index];
        if (index < arr.length - 1) {
            index++;
        }
        else {
            index = 0;
        }
        return result;
    };
}
const abc = makeLooper('abc');
console.log(abc());
console.log(abc());
//# sourceMappingURL=Lazy%20repeater.js.map