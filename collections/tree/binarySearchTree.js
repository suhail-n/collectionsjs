class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    /**
     * @description insert a node into the BST
     * @param <T> val value to insert
     * @returns <BinarySearchTree>
     */
    insert(val, current=this.root){
        if(!this.root){
            this.root = new Node(val);
            return this;
        }
        if(val < current.val){
            if(!current.left){
                current.left = new Node(val);
                return this;
            }
            return this.insert(val, current.left);
        } else if (val > current.val){
            if(!current.right){
                current.right = new Node(val);
                return this;
            }
            return this.insert(val, current.right);
        } else {
            return undefined;
        }
    }

    /**
     * @description find a value within the BST
     * @param <T> val value to find
     * @returns <T> val
     */
    find(val, current=this.root){
        if(!this.root) return false;
        if(current === null){
            return false;
        }else if(val < current.val){
            return this.find(val, current.left);
        } else if(val > current.val){
            return this.find(val, current.right);
        } else {
            return true;
        }
    }
}

module.exports = BinarySearchTree;