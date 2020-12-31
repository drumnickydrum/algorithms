var checkPossibility = function (nums) {
  const checkAscending = () => {
    let max = -Infinity;
    let prevMax = max;
    for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] < max) return [false, i, nums[i], max, prevMax];
      prevMax = max;
      max = nums[i];
    }
    return [true];
  };
  let [result, offenderIndex, offender, max, prevMax] = checkAscending();
  if (result) return true;
  nums[offenderIndex] = max;
  if (checkAscending()[0]) return true;
  nums[offenderIndex] = offender;
  nums[offenderIndex - 1] = prevMax;
  if (checkAscending()[0]) return true;
  return false;
};
// no sorting... just flip either prev or offender and check again

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
console.log(checkPossibility([1, 3, 5, 2, 4])); // false:
console.log(checkPossibility([3, 4, 2, 3])); // false : descending twice
