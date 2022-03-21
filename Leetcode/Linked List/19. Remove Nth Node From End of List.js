/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preNode = new ListNode(0, head)
  let left = preNode
  let right = head

  while (n > 0 && right) {
    right = right.next
    n--
  }

  while (right) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return preNode.next
};

// Time: O(n)
// Space: O(1)

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/