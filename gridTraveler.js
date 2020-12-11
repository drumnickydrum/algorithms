const travel = (x, y, memo = {}) => {
  if (x === 0 || y === 0) return 0;
  if (x === 1 && y === 1) return 1;
  const pair1 = x + ',' + y;
  const pair2 = y + ',' + x;
  if (memo[pair1] || memo[pair2]) return memo[pair1];
  memo[pair1] = travel(x - 1, y, memo) + travel(x, y - 1, memo);
  memo[pair2] = memo[pair1];
  return memo[pair1];
};

console.log(travel(40, 40));
