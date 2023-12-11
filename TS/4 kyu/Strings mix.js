export const mix = (s1, s2) => {
    const alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };
    const s1Letters = Object.assign({}, alphabet);
    const s2Letters = Object.assign({}, alphabet);
    const result = [];
    for (let letter of s1) {
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            const property = letter;
            s1Letters[property] += 1;
        }
    }
    for (let letter of s2) {
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            const property = letter.toLowerCase();
            s2Letters[property] += 1;
        }
    }
    for (let key in s1Letters) {
        if (s1Letters[key] <= 1) {
            delete s1Letters[key];
            continue;
        }
        if (s2Letters.hasOwnProperty(key)) {
            if (s2Letters[key] > s1Letters[key]) {
                result.push({ letter: key, appearing: s2Letters[key], place: 2 });
            }
            else if (s2Letters[key] === s1Letters[key]) {
                result.push({ letter: key, appearing: s1Letters[key], place: 3 });
            }
            else {
                result.push({ letter: key, appearing: s1Letters[key], place: 1 });
            }
            delete s1Letters[key];
            delete s2Letters[key];
            continue;
        }
        result.push({ letter: key, appearing: s1Letters[key], place: 1 });
        delete s1Letters[key];
    }
    for (let key in s2Letters) {
        if (s2Letters[key] <= 1) {
            delete s2Letters[key];
            continue;
        }
        result.push({ letter: key, appearing: s2Letters[key], place: 2 });
        delete s2Letters[key];
    }
    const sortedResult = result.sort((a, b) => b.appearing - a.appearing || a.place - b.place || a.letter.localeCompare(b.letter));
    let toPrint = [];
    sortedResult.map(obj => {
        let res = '';
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
        for (let i = 0; i < obj.appearing; i++) {
            res += obj.letter;
        }
        toPrint.push(res);
        return;
    });
    return toPrint.join('/');
};
console.log(mix("they are here", "Are they here yes"));
//# sourceMappingURL=Strings%20mix.js.map