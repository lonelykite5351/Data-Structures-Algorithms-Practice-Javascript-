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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root && subRoot) return false;

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }
    if (node1 && node2 && node1.val === node2.val) {
      return (
        isSameTree(node1.left, node2.left) &&
        isSameTree(node1.right, node2.right)
      );
    }
    return false;
  }
};

// https://leetcode.com/problems/subtree-of-another-tree/