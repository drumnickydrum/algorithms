const { txt } = require('./week3array.js');

const choosePivot = (a, l, r, pivot) => {
  if (pivot === 'first') return l;
  if (pivot === 'last') return r - 1;
};

const swap = (a, x, y) => {
  let temp = a[x];
  a[x] = a[y];
  a[y] = temp;
};

const partition = (a, l, r) => {
  let p = a[l];
  let i = l + 1;
  for (let j = i; j < r; j++) {
    if (a[j] < p) {
      swap(a, i, j);
      i++;
    }
  }
  swap(a, l, i - 1);
  return i - 1;
};

const qs = (a, l, r, pivot) => {
  if (l >= r) return;
  let i = choosePivot(a, l, r, pivot);
  swap(a, l, i);
  count += r - l - 1;
  let j = partition(a, l, r);
  qs(a, l, j, pivot);
  qs(a, j + 1, r, pivot);
};

let test = [2148, 9058, 7742, 3153, 6324, 609, 7628, 5469, 7017, 504];

let count = 0;
qs(test, 0, 10, 'last');
console.log(count);
console.log(test);
