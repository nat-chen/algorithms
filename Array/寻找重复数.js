/*
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

示例 1：

输入：nums = [1,3,4,2,2]
输出：2
示例 2：

输入：nums = [3,1,3,4,2]
输出：3
示例 3 :

输入：nums = [3,3,3,3,3]
输出：3
*/

// 方法1：用一个数组记录出现的次数，但效率不高（时间加空间维度）
var findDuplicate1 = function (nums) {
  var record = {};
  for (var i in nums) {
    var current = nums[i];
    if (record[current]) {
      return current;
    } else {
      record[current] = true;
    }
  }
};

// 方法2：双指针
var findDuplicate2 = function (nums) {
  var record = {};
  var i = 0;
  var j = nums.length - 1;
  while (i <= j) {
    var left = nums[i];
    var right = nums[j];
    if (left === right) {
      return left;
    } else if (record[left]) {
      return left;
    } else if (record[right]) {
      return right;
    } else {
      record[left] = record[right] = true;
      i++;
      j--;
    }
  }
};

//
var findDuplicate3 = function (nums) {};

var result = findDuplicate2([1, 3, 4, 2, 2]);
console.log(result);
