function isUnique(s) {
  let set = new Set(s);
  for (let char of s) {
    if (!set.delete(char)) return false;
  }
  return true;
}

let result = null;

console.time('set method');
result = isUnique('asdfqwerzxcv');
console.timeEnd('set method');
console.log('true: ', result);

console.time('set method');
result = isUnique('asdfqweraxcv');
console.timeEnd('set method');
console.log('false: ', result);

function isUniqueIndexMethod(s) {
  for (let char of s) {
    if (s.indexOf(char) !== s.lastIndexOf(char)) return false;
  }
  return true;
}

console.time('index method');
result = isUniqueIndexMethod('asdfqwerzxcv');
console.timeEnd('index method');
console.log('true: ', result);

console.time('index method');
result = isUniqueIndexMethod('asdfqweraxcv');
console.timeEnd('index method');
console.log('false: ', result);

function isUniqueSortMethod(s) {
  let sorted = s.split('');
  sorted.sort();
  for (let i = 0, len = s.length; i < len; i++) {
    if (sorted[i] === sorted[i + 1]) return false;
  }
  return true;
}

console.time('sort method');
result = isUniqueSortMethod('asdfqwerzxcv');
console.timeEnd('sort method');
console.log('true: ', result);

console.time('sort method');
result = isUniqueSortMethod('asdfqweraxcv');
console.timeEnd('sort method');
console.log('false: ', result);
