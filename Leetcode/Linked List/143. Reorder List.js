/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

  let slow = head
  let fast = head.next

  // search half node, 
  // slow pointer move 1 in per step, fast pointer move 2 in per step
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let rightHalf = slow.next
  slow.next = null
  let prev = slow.next

  // reverse right half linked list
  while (rightHalf) {
    const temp = rightHalf.next
    rightHalf.next = prev
    prev = rightHalf
    rightHalf = temp
  }

  let leftHalf = head
  rightHalf = prev

  // merge left half and right half
  while (rightHalf) {
    const temp1 = leftHalf.next
    const temp2 = rightHalf.next
    leftHalf.next = rightHalf
    rightHalf.next = temp1
    leftHalf = temp1
    rightHalf = temp2
  }
};

// Time: O(n)