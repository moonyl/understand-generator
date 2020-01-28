function* buildSquaredNumbersIterator(from = 1, to = 10) {
  for (let count = from; count <= to; count++) {
    yield count * count;
  }
}

const numbers = buildSquaredNumbersIterator(2, 9);
for (let n of numbers) {
  console.log(n);
}
