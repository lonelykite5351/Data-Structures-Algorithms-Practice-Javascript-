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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const level = []
    const qLen = queue.length
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift()
      if (node) {
        level.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (level.length > 0) {
      result.push(level)
    }
  }
  return result
};