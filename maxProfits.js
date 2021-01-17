var maxProfit = function (prices) {
  let valley = null;
  let profit = 0;
  let i = 0;
  while (prices[i] !== undefined) {
    if ((i === 0 || prices[i] <= prices[i - 1]) && prices[i] <= prices[i + 1]) {
      valley = prices[i];
      console.log(`valley: ${valley}`);
    } else if (
      prices[i] >= prices[i - 1] &&
      (prices[i + 1] === undefined || prices[i] >= prices[i + 1])
    ) {
      console.log(`peak: ${prices[i]}`);

      if (valley !== undefined) {
        profit += prices[i] - valley;
        valley = undefined;
        console.log(`profit: ${profit}`);
      }
    }
    i++;
  }
  return profit;
};

let result = null;

// result = maxProfit([5, 2, 3, 2, 6, 6, 2, 9, 1, 0, 7, 4, 5, 0]);
// console.log(result);

result = maxProfit([2, 2, 5]);
console.log(result);

// result = maxProfit([6, 1, 3, 2, 4, 7]);
// console.log(result);

// result = maxProfit([7, 1, 5, 3, 6, 4]);
// console.log(result);

// result = maxProfit([1, 2, 3, 4, 5]);
// console.log(result);

// result = maxProfit([7, 6, 4, 3, 1]);
// console.log(result);
