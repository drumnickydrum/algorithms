const getMedian = (a, l, r) => {
  let first = a[l];
  let last = a[r - 1];
  let index = Math.trunc(l + (r - l) / 2);
  let middle = (r - l) % 2 === 0 ? a[index - 1] : a[index];
  let three = [first, last, middle];
  three.sort((a, b) => a - b);
  let median = three[1];
  return median;
};

let array = [2148, 9058, 7742, 3153, 6324, 609, 7628, 5469, 7017, 504];
let len = array.length;
console.log(getMedian(array, 0, len));
