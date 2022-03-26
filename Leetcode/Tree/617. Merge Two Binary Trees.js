/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null
  }

  let r1Value = root1 ? root1.val : 0
  let r2Value = root2 ? root2.val : 0

  let newRoot = new TreeNode(r1Value + r2Value)
  newRoot.left =
    mergeTrees(root1 ? root1.left : null,
      root2 ? root2.left : null)
  newRoot.right =
    mergeTrees(root1 ? root1.right : null,
      root2 ? root2.right : null)

  return newRoot
};

// https://leetcode.com/problems/merge-two-binary-trees/