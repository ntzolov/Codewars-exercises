function isIsogram(str){
  let newArr = [];
  str = str.toLowerCase().split('');
  let isIsogram = true;
  for (let i = 0; i < str.length; i++) {
    if (newArr.includes(str[i])) {
      isIsogram = false;
      break;
    } else {
      newArr.push(str[i])
    }
  }
  return isIsogram
}