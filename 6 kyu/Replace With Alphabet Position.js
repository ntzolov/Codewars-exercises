function alphabetPosition(text) {
  let result = [];
  let letters = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ].sort((a, b) => a.localeCompare(b));
  text = text.toLowerCase().split('');
  for (let el of text) {
    if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
      result.push(`${letters.indexOf(el) + 1}`);
    }
  }
  return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
