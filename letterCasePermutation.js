// var letterCasePermutation = function (S) {
//   let array = S.split('');
//   for (let i = 0, len = S.length; i < len; i++) {
//     let char1 = array[i].toLowerCase();
//     array.forEach((char) => {
//       if (char.toLowerCase() !== char.toUpperCase) {
//       }
//     });
//   }
// };

let S = 'a1b2';
console.log(letterCasePermutation(S));

S = '3z4';
console.log(letterCasePermutation(S));

S = '12345';
console.log(letterCasePermutation(S));

S = '0';
console.log(letterCasePermutation(S));
