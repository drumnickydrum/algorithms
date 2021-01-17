// var isPowerOfTwo = function (n) {
//   if (n < 1) return false;
//   if (n === 1) return true;
//   let raised = 2;
//   while (raised < n + 1) {
//     if (raised === n) return true;
//     raised *= 2;
//   }
//   return false;
// };

var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};

console.log(isPowerOfTwo(4194303));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
