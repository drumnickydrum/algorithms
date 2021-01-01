const getMedian = (a) => {
  let len = a.length;
  let first = a[0];
  let last = a[len - 1];
  let middle = len % 2 === 0 ? a[len / 2 - 1] : a[Math.floor(len / 2)];
  let three = [first, last, middle];
  three.sort((a, b) => a - b);
  console.log(three);
  let median = three[1];
  return median;
};

let array = [20, 19];
console.log(getMedian(array));
