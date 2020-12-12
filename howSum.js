const howSum = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return;
  for (let num of arr) {
    const winner = howSum(targetSum - num, arr, memo);
    if (winner) {
      winner.push(num);
      memo[targetSum] = winner;
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return;
};

// return any combination of array elements
// whose sum is the targetSum
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
