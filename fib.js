1, 1, 2, 3, 5, 8, 13, 21, 34;

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.time('fib');
console.log(fib(50));
console.log(fib(4));
console.log(fib(5));
console.timeEnd('fib');
