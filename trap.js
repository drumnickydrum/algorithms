var trap = function (height) {
  let n = height.length;
  let current = height[0];
  let prev = current;
  let fills = {};
  let total = 0;

  for (let i = 1; i < n; i++) {
    current = height[i];

    if (current > prev) {
      for (let [level, amount] of Object.entries(fills)) {
        if (level <= current) {
          total += amount;
          delete fills[level];
        }
      }
    } else if (current < prev) {
      for (let j = current + 1; j <= prev; j++) {
        if (!fills[j]) fills[j] = 0;
      }
    }

    Object.keys(fills).forEach((level) => {
      fills[level] += 1;
    });

    prev = current;
  }

  return total;
};

let result;
result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);
