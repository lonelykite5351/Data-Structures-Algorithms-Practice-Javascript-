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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root || !root.left && !root.right) {
    return true
  }

  function BFS(root1, root2) {
    if (!root1 && !root2) {
      return true
    }
    if (root1 && !root2 || !root1 && root2) {
      return false
    }
    if (root1.val !== root2.val) {
      return false
    }
    return BFS(root1.left, root2.right) && BFS(root1.right, root2.left)
  }

  return BFS(root.left, root.right)
};

// https://leetcode.com/problems/symmetric-tree/

// Testcase: 
// [1,2,2,3,4,4,3]
// [1,2,2,null,3,null,3]
// [1,2,3]