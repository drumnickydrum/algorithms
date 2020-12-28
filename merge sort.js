const mergeSort = (array) => {
  if (array.length === 1 || array.length === 0) return array;
  let arrayRight = array.splice(Math.floor(array.length / 2));
  let sortedLeft = mergeSort(array);
  let sortedRight = mergeSort(arrayRight);
  let sorted = [];
  for (
    let i = 0, l = 0, r = 0;
    i < sortedLeft.length + sortedRight.length;
    i++
  ) {
    if (l === sortedLeft.length) {
      sorted.push(...sortedRight.slice(r));
      break;
    }
    if (r === sortedRight.length) {
      sorted.push(...sortedLeft.slice(l));
      break;
    }
    if (sortedLeft[l] < sortedRight[r]) {
      sorted.push(sortedLeft[l]);
      l++;
    } else {
      sorted.push(sortedRight[r]);
      r++;
    }
  }
  return sorted;
};

let result = mergeSort([8, 2, 56, 9, 78, 0, 3, 543, 7, 2346, 8, 9, 1, 345, 98]);
console.log(result);
