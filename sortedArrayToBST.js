var sortedArrayToBST = function (nums, len = null) {
  len = len === null ? nums.length : len;
  if (len === 0) return null;
  if (len === 1) return new TreeNode(nums[0], null, null);
  let pivot = Math.floor(len / 2);
  let val = nums.splice(pivot, 1)[0];
  let numsR = nums.splice(pivot);
  let treeL = sortedArrayToBST(
    nums,
    len % 2 === 0 ? len - pivot : len - pivot - 1
  );
  let treeR = sortedArrayToBST(numsR, len - pivot - 1);
  return new TreeNode(val, treeL, treeR);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let result = null;

result = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(result);
