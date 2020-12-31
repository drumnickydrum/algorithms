const { txt } = require('./week3array.js');

const qsPivotFirst = (array) => {
  let X = 0;
  let Y = 0;
  let Z = 0;
  let count = 0;

  const length = array.length;
  const qs = (array, length, l, p, index) => {
    if (l === length) {
      return p;
    }
    pivot = array[l];
    p = l + 1;
    for (let i = l + 1; i < length; i++) {
      if (array[i] < pivot) {
        let swap = array[i];
        array[i] = array[p];
        array[p] = swap;
        p++;
      }
    }
    let swap = array[l];
    array[l] = array[p - 1];
    array[p - 1] = swap;
    index = p - 1;

    Y++;
    if (Y > 100) {
      Y = 0;
      setTimeout(qs);
    } else {
      qs(array, index, l, p);
    }

    Z++;
    if (Z > 100) {
      Z = 0;
      setTimeout(qs);
    } else {
      qs(array, length, p);
    }

    return p;
  };

  let p = 0;
  while (p < length) {
    X++;
    if (X > 100) {
      X = 0;
      setTimeout(qs);
    } else {
      count += length - p - 1;
      p = qs(array, length, p);
    }
  }
  return count;
};

let test = [
  2,
  1,
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
  3,
  4,
  11,
  14,
  6,
  7,
  15,
];
let count = qsPivotFirst(test);
console.log(count);
