class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  // This remove method is from Udemy Course's solution.
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // BFS
  BreadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let BFSArray = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      BFSArray.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return BFSArray;
  }

  BreadthFirstSearchRecursive(queue, BFSArray) {
    if (queue.length === 0) {
      return BFSArray;
    }
    const currentNode = queue.shift();
    BFSArray.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.BreadthFirstSearchRecursive(queue, BFSArray);
  }

  DFSInOrderTraverse(node, DFSInOrderArray) {
    console.log(node.value);
    if (node.left) {
      this.DFSInOrderTraverse(node.left, DFSInOrderArray);
    }
    DFSInOrderArray.push(node.value);
    if (node.right) {
      this.DFSInOrderTraverse(node.right, DFSInOrderArray);
    }
    return DFSInOrderArray;
  }

  DFSPreOrderTraverse(node, DFSPreOrderArray) {
    DFSPreOrderArray.push(node.value);
    if (node.left) {
      this.DFSPreOrderTraverse(node.left, DFSPreOrderArray);
    }
    if (node.right) {
      this.DFSPreOrderTraverse(node.right, DFSPreOrderArray);
    }
    return DFSPreOrderArray;
  }

  DFSPostOrderTraverse(node, DFSPostOrderArray) {
    if (node.left) {
      this.DFSPostOrderTraverse(node.left, DFSPostOrderArray);
    }
    if (node.right) {
      this.DFSPostOrderTraverse(node.right, DFSPostOrderArray);
    }
    DFSPostOrderArray.push(node.value);
    return DFSPostOrderArray;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170
console.log(tree.BreadthFirstSearch()); // [9, 4, 20, 1, 6, 15, 170]
console.log(tree.BreadthFirstSearchRecursive([tree.root], []));

// DFS Inorder: [1,4,6,9,15,20,170]
console.log(tree.DFSInOrderTraverse(tree.root, []));

// DFS PreOrder: [9,4,1,6,20,15,170]
console.log(tree.DFSPreOrderTraverse(tree.root, []));

// DFS PostOrder: [1,6,4,15,170,20,9]
console.log(tree.DFSPostOrderTraverse(tree.root, []));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
