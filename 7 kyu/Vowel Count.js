function getCount(str) {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let el of str) {
    if (vowels.includes(el)) {
      counter++
    }
  }
  return counter
}