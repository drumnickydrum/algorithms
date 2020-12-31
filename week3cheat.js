const { test } = require('./week3test.js');

var items = test;
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[0], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, count) {
  var index;
  if (items.length > 1) {
    count += right - left;
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      count += index - left;
      quickSort(items, left, index - 1, count);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      count += right - index;
      quickSort(items, index, right, count);
    }
  }
  return count;
}
// first call to quick sort
let count = 0;
count = quickSort(items, 0, items.length - 1, count);
console.log(count); //prints [2,3,5,6,7,9]
