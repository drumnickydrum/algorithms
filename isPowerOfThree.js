var isPowerOfThree = function (n) {
  if (n === 1) {
    return true;
  } else if (n < 3) {
    return false;
  }
  let raised = 3;
  while (raised < n + 1) {
    if (raised === n) return true;
    raised *= 3;
  }
  return false;
};

console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(45)); // false
