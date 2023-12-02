"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mix = void 0;
var mix = function (s1, s2) {
    var alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };
    var s1Letters = __assign({}, alphabet);
    var s2Letters = __assign({}, alphabet);
    var result = [];
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var letter = s1_1[_i];
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            var property = letter;
            s1Letters[property] += 1;
        }
    }
    for (var _a = 0, s2_1 = s2; _a < s2_1.length; _a++) {
        var letter = s2_1[_a];
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            var property = letter.toLowerCase();
            s2Letters[property] += 1;
        }
    }
    for (var key in s1Letters) {
        if (s1Letters[key] <= 1) {
            delete s1Letters[key];
            continue;
        }
        if (s2Letters.hasOwnProperty(key)) {
            if (s2Letters[key] > s1Letters[key]) {
                var currObj_1 = {
                    letter: key,
                    appearing: s2Letters[key],
                    place: 2
                };
                result.push({ letter: key, appearing: s2Letters[key], place: 2 });
            }
            else if (s2Letters[key] === s1Letters[key]) {
                var currObj_2 = {
                    letter: key,
                    appearing: s1Letters[key],
                    place: 3
                };
                result.push(currObj_2);
            }
            else {
                var currObj_3 = {
                    letter: key,
                    appearing: s1Letters[key],
                    place: 1
                };
                result.push(currObj_3);
            }
            delete s1Letters[key];
            delete s2Letters[key];
            continue;
        }
        var currObj = {
            letter: key,
            appearing: s1Letters[key],
            place: 1
        };
        result.push(currObj);
        delete s1Letters[key];
    }
    for (var key in s2Letters) {
        if (s2Letters[key] <= 1) {
            delete s2Letters[key];
            continue;
        }
        var currObj = {
            letter: key,
            appearing: s2Letters[key],
            place: 2
        };
        result.push(currObj);
        delete s2Letters[key];
    }
    var sortedResult = result.sort(function (a, b) { return b.appearing - a.appearing || a.place - b.place || a.letter.localeCompare(b.letter); });
    var toPrint = [];
    sortedResult.map(function (obj) {
        var res = '';
        switch (obj.place) {
            case 1:
                {
                    res += '1:';
                }
                ;
                break;
            case 2:
                {
                    res += '2:';
                }
                ;
                break;
            case 3:
                {
                    res += '=:';
                }
                ;
                break;
        }
        for (var i = 0; i < obj.appearing; i++) {
            res += obj.letter;
        }
        toPrint.push(res);
        return;
    });
    // for (let obj of sortedResult) {
    //   toPrint.push(`${obj.place}${obj.letter.repeat(obj.appearing)}`)
    // }
    console.log(sortedResult);
    return toPrint.join('/');
};
exports.mix = mix;
console.log((0, exports.mix)("they are here", "Are they here yes"));
