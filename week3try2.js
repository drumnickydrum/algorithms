const { txt } = require('./week3array.js');

const partition = (a, l, r) => {
  let p = a[l];
  let i = l + 1;
  for (let j = i; j < r; j++) {
    if (a[j] < p) {
      let swap = a[i];
      a[i] = a[j];
      a[j] = swap;
      i++;
    }
  }
  let swap = a[l];
  a[l] = a[i - 1];
  a[i - 1] = swap;
  return p;
};

const qs = (array, start, end) => {
  // let count = 0;
  if (end <= 1) return;
  let p = partition(array, start, end);
  qs(array, 0, p);
  // stuck after left side of partition sorted
  return p;
};

let test = [
  4,
  2,
  1,
  3,
  12,
  13,
  16,
  10,
  9,
  5,
  18,
  8,
  17,
  20,
  19,
  11,
  14,
  6,
  7,
  15,
];

qs(test, 0, 20);
console.log(test);
