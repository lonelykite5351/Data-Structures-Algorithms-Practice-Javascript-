/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 1 || inorder.length === 1) {
    // O(1)
    return new TreeNode(preorder[0]);
  }

  // Recursion
  function buildBT(preorder, inorder) {
    // base case
    if (preorder.length === 0 || inorder.length === 0) {
      return null;
    }

    let rootValue = preorder[0];
    let rootIndex = inorder.indexOf(rootValue);
    const root = new TreeNode(rootValue);
    root.left = buildBT(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
    root.right = buildBT(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
    return root;
  }

  return buildBT(preorder, inorder);
};

// Time Complexity: O(logn)
// Space Complexity: Call Stack function --> O(nlogn)?

// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
