var sortedArrayToBST = function (nums) {

  function createBST(leftPointer, rightPointer) {
    if (leftPointer > rightPointer) {
      return null
    }
    const middle = Math.floor((rightPointer + leftPointer) / 2)
    let newNode = new TreeNode(nums[middle])
    newNode.left = createBST(leftPointer, middle - 1)
    newNode.right = createBST(middle + 1, rightPointer)
    return newNode
  }

  return createBST(0, nums.length - 1)
};