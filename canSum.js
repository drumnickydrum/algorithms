const canSum = (targetSum, arr) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return;
  for (let num of arr) {
    const winner = canSum(targetSum - num, arr);
    if (winner) {
      return true;
    }
  }
  return false;
};

// can any combination of array elements
// sum to the targetSum, you may reuse elements
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [2, 4]));

//                 7
//     -5      -3      -4      -7
//     2       4       3       [0]
// 5,3,4,7   5,3,4,7  5,3,4,7
// -,-,-,-   -,1,0,-  -,0,-,-
