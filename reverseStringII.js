var reverseStr = function (s, k) {
  const len = s.length;
  const mod = len % k;
  let remaining = len;
  let reversed = s.split('').reverse();
  let result = '';
  for (let i = 0, count = 0, shift = 0, reverse = true; i < len; i++) {
    if (remaining <= mod) {
      let end = s.slice(i);
      if (reverse) end = end.split('').reverse().join('');
      result += end;
      return result;
    }
    if (reverse) {
      let index = len - shift - k + count;
      result += reversed[index];
    } else {
      result += s.charAt(i);
    }
    count++;
    remaining--;
    if (count === k) {
      reverse = !reverse;
      shift += k;
      count = 0;
    }
  }
  return result;
};

const result = reverseStr(
  'hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl',
  39
);
console.log(result);
