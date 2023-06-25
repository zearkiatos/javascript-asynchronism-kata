function* generate() {
  yield 1;
  yield 2;
  yield 3;
}

function* iterable(array) {
  for (let item of array) {
    yield item;
  }
}

export { generate, iterable };
