function countConsonants(str) {
  let counter = 0;
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    let currLetter = str[i].toLowerCase();
    console.log(currLetter);
    if (
      currLetter === 'a' ||
      currLetter === 'e' ||
      currLetter === 'i' ||
      currLetter === 'o' ||
      currLetter === 'u'
    ) {
      continue;
    } else {
      if (
        chars.includes(currLetter) === false &&
        currLetter.charCodeAt() >= 97 &&
        currLetter.charCodeAt() <= 122
      ) {
        chars.push(currLetter);
        counter++;
      }
    }
  }
  return counter;
}