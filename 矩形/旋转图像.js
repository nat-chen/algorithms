/*
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
*/

// 思路：先上下对换，再左斜对角线互换
const rotate = function (matrix) {
  const n = matrix.length;
  // 上下翻转
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - i][j];
      matrix[n - 1 - i][j] = tmp;
    }
  }

  // 左斜对角线(\)翻转
  for (let i = 0; i < n; i++) {
    // 第二层遍历终止条件为 j < i
    for (let j = 0; j < i; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  return matrix;
};
