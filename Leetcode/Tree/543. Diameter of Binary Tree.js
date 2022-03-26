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
var diameterOfBinaryTree = function (root) {
  let res = 0

  function DFS(root) {
    if (!root) {
      return -1
    }
    let left = DFS(root.left)
    let right = DFS(root.right)

    // +2 it's means every node has 2 path to go, if it path null, return -1
    // 1 + (-1) = 0
    res = Math.max(res, (left + right + 2))

    return Math.max(left, right) + 1
  }

  DFS(root)
  return res
};