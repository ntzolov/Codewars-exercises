"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfIntervals = void 0;
function sumOfIntervals(intervals) {
    let leftIndex = 0;
    let rightIndex = 0;
    let currLeftIndex = 0;
    let currRightIndex = 0;
    let leftPrevIndex = 0;
    let rightPrevIndex = 0;
    let total = 0;
    let intervalsLength = intervals.length - 1;
    let intervalsSorted = intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervalsSorted);
    intervalsSorted.forEach((tuple, i) => {
        if (i === 0 && i !== intervalsLength) {
            leftIndex = tuple[0];
            rightIndex = tuple[1];
            leftPrevIndex = tuple[0];
            rightPrevIndex = tuple[1];
        }
        else if (intervalsSorted.length === 1) {
            return total += tuple[1] - tuple[0];
        }
        currLeftIndex = tuple[0];
        currRightIndex = tuple[1];
        if (currLeftIndex <= rightIndex) {
            if (currRightIndex > rightIndex) {
                rightIndex = currRightIndex;
            }
            if (i === intervalsLength) {
                total += rightIndex - leftIndex;
                return;
            }
        }
        else {
            total += rightIndex - leftIndex;
            leftIndex = currLeftIndex;
            rightIndex = currRightIndex;
            if (i === intervalsLength) {
                total += rightIndex - leftIndex;
                return;
            }
        }
    });
    return total;
}
exports.sumOfIntervals = sumOfIntervals;
console.log(sumOfIntervals([
    [-110, 323], [-101, 6],
    [484, 486], [-375, 45],
    [-117, 120], [418, 441],
    [96, 475], [469, 497],
    [236, 404], [146, 467]
]));
//# sourceMappingURL=Sum%20of%20intervals.js.map