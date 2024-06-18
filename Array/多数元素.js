/*
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：nums = [3,2,3]
输出：3
示例 2：
输入：nums = [2,2,1,1,1,2,2]
输出：2
*/
const majorityElement = function (nums) {
  const obj = {};
  const times = Math.ceil(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    obj[current] = (obj[current] || 0) + 1;
    if (obj[current] === times) {
      return current;
    }
  }
};

const majorityElement1 = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.ceil(nums.length / 2)];
};
