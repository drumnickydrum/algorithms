var permute = function (nums, memo = {}) {
  const key = nums.reduce((str, num) => str + num, '');
  if (memo[key]) return memo[key];
  const len = nums.length;
  if (len === 1) return [nums];
  const results = [];
  for (let i = 0; i < len; i++) {
    const numsCopy = [...nums];
    const leader = numsCopy.splice(i, 1);
    const result = memo[key] || permute(numsCopy, memo);
    result.forEach((result) => {
      results.push([...leader, ...result]);
    });
  }

  memo[key] = memo[key] ? memo[key].push(results) : results;
  return results;
};

let r;

// r = permute([1]);
// console.log(r);
// r = permute([1, 2]);
// console.log(r);
// r = permute([1, 2, 3]);
// console.log(r);
// r = permute([1, 2, 3, 4]);
// console.log(r);

console.time();
r = permute([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.timeEnd();
console.log(r);
