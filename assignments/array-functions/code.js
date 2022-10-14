const countTens = (array) => {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      num++;
    }
  }
  return num;
}

const sum = (array) => {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num+=array[i]
  }
  return num;
}