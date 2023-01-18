function removeChar(str){
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || i === str.length - 1) {
      continue;
    } else {
      result += str[i];
    }
  }
  return result
};