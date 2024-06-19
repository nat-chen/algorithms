/*
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库内置的 sort 函数的情况下解决这个问题。

示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：
输入：nums = [2,0,1]
输出：[0,1,2]
*/

/*
思路1：
- 永远将当前位设置为 2，设置两个 num0 与 num1 分别代表 0，1 两个指针。分成两个版块 0 和 1，当 0 与 1 赋值完剩下就是 2 的位置
- 对于为 1 场景：当前值设置为 1，且 num1 向后移一位
- 对于为 0 场景：将 num1 向后增一位 1，同时将 num0 最后增一位 0(相当于 1 往后平移了一位)，且 num0, num1 都向后移一位
*/
const sortColors = function (nums) {
  let num0 = 0,
    num1 = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    nums[i] = 2;
    if (current < 2) {
      nums[num1++] = 1;
    }
    if (current < 1) {
      nums[num0++] = 0;
    }
  }
  return nums;
};

// 三个指针：left, right, i 当前遍历，当为 0 时与 left 交换，当为 1 时不替换，当为 2 时与 right 交换
const sortColors1 = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    const current = nums[i];
    if (current === 0) {
      swap(i++, left++, nums);
    } else if (current === 1) {
      i++;
    } else {
      swap(i, right--, nums);
    }
  }
  return nums;
};

const swap = function (left, right, nums) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
};
