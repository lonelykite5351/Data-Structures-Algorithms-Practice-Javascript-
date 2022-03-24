/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let n = 0;
  function DFS(node, n) {
    if (!node) {
      return n;
    }
    n++;
    return Math.max(DFS(node.left, n), DFS(node.right, n));
  }
  return DFS(root, n);
};

// https://leetcode.com/problems/maximum-depth-of-binary-tree/