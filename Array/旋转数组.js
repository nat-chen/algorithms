/*
旋转数组

给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]。

注意超出数组长度的场景，如 [1,2] k 为 5，结果为 [2, 1]
*/

// 方法1：分成左右两半组成一个新数组，一个个替换旧数组
const rotate1 = function(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  const newNums = [...nums.slice(-k), ...nums.slice(0, nums.length - k)];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newNums[i];
  }
  return nums;
};

/*
位移要注意取余规律
[0, 1, 2, 3, 4, 5] k = 3
0 => 3
1 => 4
2 => 4
3 => 0
4 => 1
5 => 2
*/
const rotate2 = function(nums) {
  const length = nums.length;
  const temp = [];
  for (let i = 0; i < length; i++) {
    temp[i] = nums[i];
  }
  for (let i = 0; i < length; i++) {
    nums[(i + k) % length] = temp[i];
  }
  return nums;
}
