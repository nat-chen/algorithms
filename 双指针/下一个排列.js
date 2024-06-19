/*
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
必须原地修改，只允许使用额外常数空间。
以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/
const nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return;
  }
  let pos = -1;
  let length = nums.length - 1;
  let i = length,
    j = length;
  // 从尾部到前部，找到第一个升序的俩个值：i-1和i，i-1 即要替换的位置
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      pos = i - 1;
      break;
    }
  }
  // 没有更大的排列，直接整体降序
  if (pos == -1) {
    reverse(nums, 0);
    return;
  }
  // 找到第一个大于 nums[pos] 进行交换
  for (let j = nums.length - 1; j > pos; j--) {
    if (nums[pos] < nums[j]) {
      swap(nums, pos, j);
      break;
    }
  }
  // 将剩余的 (pos+1,length) 反转，即前后对调由升序变成降序
  reverse(nums, pos + 1);
  return nums;
};

const reverse = function (nums, pos) {
  for (let i = pos, j = nums.length - 1; i < j; i++, j--) {
    swap(nums, j, i);
  }
};

const swap = function (nums, pos, i) {
  let temp = nums[i];
  nums[i] = nums[pos];
  nums[pos] = temp;
};
