/*
删除排序数组中的重复项

给你一个升序排列的数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。
元素的相对顺序应该保持一致 。

示例：
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
*/

// 方法1：额外对象记录值是否出现过
const removeDuplicates1 = function(nums) {
  const record = {
    [nums[0]]: true
  };
  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];
    if (record[currentNum]) {
      nums.splice(i--, 1);
    } else {
      record[currentNum] = true;
    }
  }
  return nums.length;
};

// 方法2：双指针
const removeDuplicates2 = function(nums) {
  let slow = fast = 0;
  const numsLength = nums.length;
  while (++fast < numsLength) {
    if (nums[slow] !== nums[fast]) {
      nums[++slow] = nums[fast]
    }
  }
  return slow + 1;
}