var checkPossibility = function (nums) {
  const checkSorted = (array) => {
    let sorted = [...array];
    sorted.sort((a, b) => a - b);
    let isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== sorted[i]) isSorted = false;
    }
    return isSorted;
  };
  // if (checkSorted(nums)) return true;

  let flipMax = [...nums];
  for (let i = 0, prev = -Infinity, prev2 = null; i < nums.length; i++) {
    if (flipMax[i] < prev) {
      flipMax[i - 1] = prev2;
      break;
    }
    prev2 = prev;
    prev = nums[i];
  }
  if (checkSorted(flipMax)) return true;

  let flipOffender = [...nums];
  for (let i = 0, prev = -Infinity; i < nums.length; i++) {
    if (flipOffender[i] < prev) {
      flipOffender[i] = prev;
      break;
    }
    prev = nums[i];
  }
  if (checkSorted(flipOffender)) return true;

  return false;
};
// flip max to prev, sort, check
// flip offender to max, sort, check

console.log(checkPossibility([5, 9, 7, 8])); // true / offender: prev
///////////////////////////  [5, 5, 7, 8]
console.log(checkPossibility([1, 2, 4, 2, 3])); // true / offender: prev
///////////////////////////  [1, 2, 2, 2, 3]
console.log(checkPossibility([1, 1, 1, 1, 1, 1, 1, 1, 1])); // true / offender: prev
//////////////////////////  [1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(checkPossibility([4, 2, 3])); // true / offender: prev
///////////////////////////  [-, 2, 3]
console.log(checkPossibility([4, 5, 1])); // true / offender: nums[i]
///////////////////////////  [4, 5, 5]
console.log(checkPossibility([5, 7, 1, 8])); // true / offender: nums[i]
///////////////////////////  [5, 7, 7, 8]
console.log(checkPossibility([1, 2, 3, 4, 7, 5, 6, 7, 8])); // true
/////////////////////////////[1, 2, 3, 4, 7, 7, ]

console.log(checkPossibility([4, 2, 1])); // false : descending twice
/////////////////////////////[-, -]
console.log(checkPossibility([5, 7, 2, 1])); // false : descending twice
/////////////////////////////[5, 7, 7, 1]
console.log(checkPossibility([1, 2, 3, 4, 6, 5, 7, 9, 8])); // false : descending twice
/////////////////////////////[1, 2, 3, 4, 6, 6, 7, 9, 8]
console.log(checkPossibility([2, 3, 3, 2, 2])); // false :
console.log(checkPossibility([3, 4, 2, 3])); // false : sub less than prev max
console.log(checkPossibility([1, 3, 5, 2, 4])); // false:
