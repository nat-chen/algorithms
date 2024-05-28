/*
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。
 
示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：
输入：nums = [1]
输出：1
示例 3：
输入：nums = [5,4,-1,7,8]
输出：23
*/

// max 前缀和 = 当前 max 前缀和 - min 前缀和
const maxSubArray = function (nums) {
  let ans = -Infinity;
  let minPreSum = 0;
  let preSum = 0;
  for (const x of nums) {
    preSum += x; // 当前的前缀和
    ans = Math.max(ans, preSum - minPreSum); // 减去前缀和的最小值
    minPreSum = Math.min(minPreSum, preSum); // 维护前缀和的最小值
  }
  return ans;
};
/* 动态规划：
如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
*/
const maxSubArray1 = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};
