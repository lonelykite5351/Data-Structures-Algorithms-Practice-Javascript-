function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

const head = {
  val: 7,
  next: {
    val: 13,
    next: {
      val: 11, next: {
        val: 10, next: {
          val: 10, next: {
            val: 1,
            next: null
          }
        }
      }
    }
  }
}

var copyRandomList = function (head) {
  const newMap = new Map([[null, null]])

  let cur = head
  while (cur) {
    newMap.set(cur, new Node(cur.val, null, null))
    cur = cur.next
  }
  for(let item of newMap) {
    console.log(item);
  }

  cur = head
  while (cur) {
    const copy = newMap.get(cur)
    copy.next = newMap.get(cur.next)
    copy.random = newMap.get(cur.random)
    cur = cur.next
  }
  return newMap.get(head)
};

console.log(copyRandomList(head));