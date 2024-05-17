/*
存在重复元素

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。 d
*/

// 另外一个思路是 new Set 去重前后长度比较
const containsDuplicate = function(nums) {
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) {
      return true;
    } else {
      record[nums[i]] = true;
    }
  }
  return false;
};