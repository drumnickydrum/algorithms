var reverseWords = function (s) {
  const words = s.split(' ');
  const revWords = [];
  words.forEach((word) => {
    revWords.push(word.split('').reverse().join(''));
  });
  return revWords.join(' ');
};

const result = reverseWords("Let's take LeetCode contest");
console.log(result);
