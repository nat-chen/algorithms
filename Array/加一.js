/*
加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

输入：digits = [1,2,3]
输出：[1,2,4]
不会以 0 开头
*/

const plusOne = function(digits) {
  const digitsLength = digits.length;
  let carry = 0;
  for (let i = digitsLength - 1; i >= 0; i--) {
    const currentNumber = digits[i];
    carry = i === digitsLength - 1 ? 1 : carry;
    digits[i] = (currentNumber + carry) % 10;
    carry = (currentNumber + carry === 10) ? 1 : 0;
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};
