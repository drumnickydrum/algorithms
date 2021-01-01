var buddyStrings = function (A, B) {
  let lenA = A.length;
  let lenB = B.length;
  if (lenA !== lenB) return false;
  if (lenA <= 1 || lenB <= 1) return false;
  let C = '';
  let swapCount = 0;
  for (let i = 0, s = 0, swapReady = false; i < lenA; i++) {
    if (A[i] !== B[i]) {
      if (swapReady) {
        let pt1 = A.slice(0, s);
        let swap1 = A[s];
        let pt2 = A.slice(s + 1, i);
        let swap2 = A[i];
        let pt3 = A.slice(i + 1);
        C = pt1 + swap2 + pt2 + swap1 + pt3;
        swapCount++;
        swapReady = false;
      } else {
        if (i === lenA - 1) return false;
        s = i;
        swapReady = true;
      }
    }
  }
  if (!swapCount) {
    for (let i = 0; i < lenA; i++) {
      if (A.lastIndexOf(A[i]) !== i) return true;
    }
    return false;
  }
  for (let i = 0; i < lenA; i++) {
    if (C[i] !== B[i]) return false;
  }
  return true;
};

let A = 'ab';
let B = 'ba';
console.log(buddyStrings(A, B)); // true

A = 'aa';
B = 'aa';
console.log(buddyStrings(A, B)); // true

A = 'aaaaaaabc';
B = 'aaaaaaacb';
console.log(buddyStrings(A, B)); // true

A = 'ab';
B = 'ab';
console.log(buddyStrings(A, B)); // false

A = '';
B = 'aa';
console.log(buddyStrings(A, B)); // false

A = 'abac';
B = 'abad';
console.log(buddyStrings(A, B)); // false
