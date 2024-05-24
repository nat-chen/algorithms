/*
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
子数组是数组中元素的连续非空序列。
示例 1：
输入：nums = [1,1,1], k = 2
输出：2
示例 2：
输入：nums = [1,2,3], k = 3
输出：2

滑动窗口需要满足单调性，当右端点元素进入窗口时，窗口元素和是不能减少的。当负数进入窗口时，窗口左端点反而要向左移动，导致算法复杂度不是线性的。
*/
// 前缀和 sum(i, j) = preSum[j + 1] - preSum[i]
const subarraySum = function (nums, k) {
  let count = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1); // 要想把任意子数组都表示成两个前缀和的差，必须添加 s[0]=0s[0]=0s[0]=0，否则当子数组是前缀时，没法减去一个数
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (prefixSum.has(sum - k)) {
      // 当前 sum  - k = 前面的前缀和
      count += prefixSum.get(sum - k);
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }
  return count;
};

const result = subarraySum([-2, 2, 0], 0);

console.log(result);
