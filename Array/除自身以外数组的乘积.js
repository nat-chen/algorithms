/*
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

示例 1:
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]

[1, 2, 3, 4]
前缀积 [1, 1, 2, 6]
后缀积 [24, 12, 4, 1]
结果：前缀积 * 后缀积
*/

const productExceptSelf = function (nums) {
  const n = nums.length;
  const pre = Array(n);
  pre[0] = 1;
  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  const suf = Array(n);
  suf[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }

  const ans = Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = pre[i] * suf[i];
  }
  return ans;
};
