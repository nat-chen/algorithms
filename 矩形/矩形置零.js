/*
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
*/

// 思路：记录出现零的行与列，遍历矩形凡是行或列任意满足 0，就更新为 0
const setZeroes = function (matrix) {
  const rowZero = {};
  const columnZero = {};
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (matrix[i][j] === 0) {
        rowZero[i] = true;
        columnZero[j] = true;
      }
    }
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (rowZero[i] || columnZero[j]) matrix[i][j] = 0;
    }
  }
  return matrix;
};
