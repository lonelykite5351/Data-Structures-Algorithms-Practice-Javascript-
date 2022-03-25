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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];

  function DFS(node) {
    if (!node) {
      return node;
    }

    if (node.left) {
      DFS(node.left);
    }

    result.push(node.val);

    if (node.right) {
      DFS(node.right);
    }
    return result;
  }

  return DFS(root);
};

// https://leetcode.com/problems/binary-tree-inorder-traversal/