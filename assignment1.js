const m64 = (x, y) => {
  console.time('');
  let A = y.split('').reverse();
  let B = x.split('').reverse();
  let R = [];
  for (a = 0; a < A.length; a++) {
    for (b = 0, carry = 0, bR = []; b < B.length; b++) {
      let p = A[a] * B[b]; // p=18, p=12
      if (carry) {
        p += carry;
        carry = 0; // p=18, p=13
      }
      if (p > 9) {
        carry = parseInt(p.toString().split('')[0]); // carry=1, carry=1
        bR.unshift(p % 10); // bR=[8], bR=[3,8]
      } else {
        bR.unshift(p);
        carry = 0;
      }
    }
    if (carry) bR.unshift(carry);
    for (i = 0; i < a; i++) {
      bR.push(0);
    }
    if (R.length === 0) {
      R = [...bR];
    } else {
      for (
        i = 0, carry = 0, tempR = [], bRi = bR.length - 1, Ri = R.length - 1;
        i < bR.length;
        i++
      ) {
        if (R[Ri - i] === undefined) {
          if (carry) {
            let thisSum = bR[bRi - i] + carry;
            carry = 0;
            if (thisSum > 9) {
              thisArray = thisSum.toString().split('');
              tempR.unshift(thisArray[1]);
              tempR.unshift(thisArray[0]);
            } else {
              tempR.unshift(thisSum);
            }
          } else {
            tempR.unshift(bR[bRi - i]);
          }
        } else {
          let sum = bR[bRi - i] + R[Ri - i];
          if (carry) {
            sum += carry;
            carry = 0;
          }
          if (sum > 9) {
            carry = parseInt(sum.toString().split('')[0]);
            tempR.unshift(sum % 10);
          } else {
            tempR.unshift(sum);
            carry = 0;
          }
        }
      }
      if (carry) tempR.unshift(carry);
      R = [...tempR];
    }
  }
  let result = R.join('');
  console.timeEnd('');
  return result;
};

console.log(m64('981', '456'));
