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
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    // Left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
                else{
                    // Right
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(value) {
        if(!this.root){
            return false
        }

        let currentNode = this.root
        while(currentNode) {
            if(value < currentNode.value){
                currentNode = currentNode.left
            }
            else if(value > currentNode.value){
                currentNode = currentNode.right
            }
            else if(value === currentNode.value){
                return currentNode
            }
        }
        return false
    }

    remove(value){
        const findNode = this.lookup(value)
        if(findNode === false) {
            return 'No Exist Value'
        }
        else{
            if(findNode.left === null && findNode.right === null){
                findNode = null
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree);

console.log(tree.lookup(5))
console.log(tree.lookup(6))
console.log(tree.lookup(20))
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
