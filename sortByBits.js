var sortByBits = function (arr) {
  arr.sort((a, b) => a - b);
  let numOfBits = {};
  arr.forEach((num) => {
    let bits = num.toString(2).split('');
    let count = 0;
    bits.forEach((bit) => {
      if (bit == 1) count++;
    });
    if (!numOfBits[count]) {
      numOfBits[count] = [num];
    } else {
      numOfBits[count].push(num);
    }
  });
  let result = [];
  for (let [count, nums] of Object.entries(numOfBits)) {
    nums.forEach((num) => result.push(num));
  }
  return result;
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));

arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
console.log(sortByBits(arr));

arr = [10000, 10000];
console.log(sortByBits(arr));

arr = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(sortByBits(arr));

arr = [10, 100, 1000, 10000];
console.log(sortByBits(arr));
