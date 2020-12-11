// only two operands
// const canSum = (t, arr) => {
//   if (arr.length === 1 && arr[0] !== t) return false;
//   if (arr[0] === t) return true;
//   const op = arr.shift();
//   for (let i of arr) {
//     if (op + i === t) return true;
//   }
//   return canSum(t, arr);
// };

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
