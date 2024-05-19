/*
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

边界处理：
1.当基点大于0的时候，直接返回结果
2.当基点与前一个基点相同时，跳过本次循环
3.j和k都要各自往左右移动，在左移或右移后可能碰到相同项，需要继续移动
*/

const threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let sum = 0;
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let current = nums[i];
    if (current > 0) return result;
    if (i > 0 && current == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let leftValue = nums[left];
      let rightValue = nums[right];
      sum = current + leftValue + rightValue;
      if (sum === 0) {
        result.push([current, leftValue, rightValue]);
        left++;
        right--;
        while (nums[left] == leftValue) {
          left++;
        }
        while (nums[right] == rightValue) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
