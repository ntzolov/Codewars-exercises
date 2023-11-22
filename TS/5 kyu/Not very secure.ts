export function alphanumeric(string: string): boolean {
  const regex = new RegExp(/[^a-zA-Z0-9]/g)
  if (string === '') {
    return false
  }
  return !regex.test(string)
}

console.log(alphanumeric('abv'));