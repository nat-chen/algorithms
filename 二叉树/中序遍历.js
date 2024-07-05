/*
给定一个二叉树的根节点 root ，返回 它的 中序 遍历

输入：root = [1,null,2,3]
输出：[1,3,2]
输入：root = []
输出：[]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 递归深度遍历
const dfs = function (root, total) {
  if (!root) return;
  dfs(root.left, total);
  total.push(root.val);
  dfs(root.right, total);
};

const inorderTraversalWithRecursive = function (root) {
  const result = [];
  dfs(root, result);
  return result;
};

// 栈中序
const inorderTraversalWithStack = function (root) {
  const result = [],
    stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

// 栈前序
const preorderTraversalWithStack = function (root) {
  const result = [],
    stack = [root];
  while (stack.length) {
    const current = stack.pop(); // 出栈
    result.push(current.val);
    current.left && stack.push(current.left); // 先左
    current.right && stack.push(current.right); // 后右
  }
};

// 栈后序
const postorderTraversalWithStack = function (root) {
  const result = [],
    stack = [root];
  while (stack.length) {
    const current = stack.pop();
    result.unshift(current.val); // 头部插入
    current.left && stack.push(current.left);
    current.right && stack.push(current.right);
  }
  return result;
};
