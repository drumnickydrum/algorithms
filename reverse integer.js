var reverse = function (x, isNeg = false, divider = 0) {
  if (x === 0) return 0;
  while (x % 10 === 0) {
    x /= 10;
  }
  if (x < 0) {
    isNeg = true;
    x *= -1;
  }
  let reversed = 0;
  while (x >= 1) {
    let y = x % 10;
    reversed += Math.trunc(y);
    reversed *= 10;
    x /= 10;
    console.log(reversed);
  }
  reversed /= 10;
  return isNeg ? reversed * -1 : reversed;
};

console.log(reverse(12000));
// console.log(12000 / 1000);
