class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if(!this.root){
            this.root = value
            return this
        }
        
    }
    lookup(value) {
        //Code here
    }
    // remove
}

const tree = new BinarySearchTree();
console.log(tree.insert(9))
console.log(tree.insert(4))
console.log(tree.insert(6))
console.log(tree.insert(20))
console.log(tree.insert(170))
console.log(tree.insert(15))
console.log(tree.insert(1))
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
