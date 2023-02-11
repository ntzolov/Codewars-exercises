function validParentheses(parens) {
  let start = 0;
  let end = 0;

  if (parens.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < parens.length; i++) {
    if (i === 0) {
      if (parens[i] === ')') {
        return false;
      }
    }
    if (end > start) {
      return false;
    }
    if (parens[i] === '(') {
      start += 1;
    } else {
      end += 1;
    }
  }

  if (start !== end) {
    return false;
  }
  
  return true;
}

console.log(validParentheses('())('));
