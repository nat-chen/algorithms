/*
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

思路
设边界 top/bottom/left/right
顺时针：满足 top <= bottom, left <= right
leftTop => rightTop, top + 1
rightTop => rightBottom, right + 1
rightBottom => leftBottom, bottom - 1
leftBottom => leftTop, left + 1
*/

const spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  const result = [];
  let m = -1;
  while (true) {
    for (let i = left; i <= right; i++) {
      result[++m] = matrix[top][i];
    }
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      result[++m] = matrix[i][right];
    }
    if (--right < left) break;
    for (let i = right; i >= left; i--) {
      result[++m] = matrix[bottom][i];
    }
    if (--bottom < top) break;
    for (let i = bottom; i >= top; i--) {
      result[++m] = matrix[i][left];
    }
    if (++left > right) break;
  }
  return result;
};
