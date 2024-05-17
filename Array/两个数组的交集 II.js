/*
两个数组的交集 II

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

示例：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
*/

const intersect1 = function(nums1, nums2) {
  const record1 = {};
  const record2 = {};
  for (let i = 0; i < nums1.length; i++) {
    record1[nums1[i]] = (record1[nums1[i]] || 0) + 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (record1[[nums2[i]]]) {
      record2[nums2[i]] = (record2[nums2[i]] || 0) + 1;
    }
  }
  return Object.keys(record2).reduce((total, key) => {
    let times = Math.min(record1[key], record2[key]);
    while (times-- > 0) {
      total.push(parseInt(key));
    }
    return total;
  }, [])
};

// 思路：双指针，取短的数组遍历
const intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let short = long = null;
  if (nums1.length > nums2.length) {
    short = nums2;
    long = nums1;
  } else {
    short = nums1;
    long = nums2;
  }
  let i = j = 0;
  const result = [];
  while (i < short.length && j < long.length) {
    if (short[i] === long[j]) {
      result.push(short[i]);
      j++;
      i++;
    } else if (short[i] > long[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}