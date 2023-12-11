export function makeLooper(str: string): () => string {

  const arr: string[] = str.split('')
  let index = 0

  return () => {
    const result = arr[index]

    if (index < arr.length - 1) {
      index++
    } else {
      index = 0
    }

    return result
  };
}

const abc = makeLooper('abc')
console.log(abc());
console.log(abc());