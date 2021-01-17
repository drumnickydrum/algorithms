var moveZeroes = function (nums) {
  const len = nums.length;
  let zero = [];
  let nonZero = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      zero.push(i);
    } else {
      nonZero.push(nums[i]);
    }
  }
  let nonZeroLen = nonZero.length;
  console.log(nonZeroLen);
  for (i = 0; i < nonZeroLen; i++) {
    nums[i] = nonZero[i];
  }
  for (i = nonZeroLen; i < len; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
