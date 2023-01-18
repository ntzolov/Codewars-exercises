function abbrevName(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      result += name[i].toUpperCase() + '.'
    }
    if (name[i] === ' ') {
      result += name[i + 1].toUpperCase()
    }
  }
  return result
}