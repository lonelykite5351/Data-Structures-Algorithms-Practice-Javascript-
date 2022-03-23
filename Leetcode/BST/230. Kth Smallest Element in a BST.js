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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;
  let count = 0;

  while (node || stack) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;
    if (count === k) {
      return node.val;
    }
    node = node.right;
  }
};

// Time: O(n)
// Space: O(n)

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/