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
    /**
     * @description performs breadth first search to find a list of all the values
     * @returns <List> list of all values found during BFS
     */
    BFS(){
        let data = [],
            queue = [],
            current = this.root;
        queue.push(current);
        while(queue.length){
            current = queue.shift();
            data.push(current.val)
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }
    /**
     * @description performs breadth first search using the recursive helper pattern
     * @returns <List> list of all values found during BFS
     */
    BFSRecursive(){
        let data = [];
        let queue = [];
        function helperBFS(queue){
            if(queue.length < 1) return;
            let current = queue.shift();
            data.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            helperBFS(queue)
        }
        queue.push(this.root)
        helperBFS(queue);
        return data;

    }
    /**
     * @description performs breadth first search using a pure recursive function
     * @param <Node> Node to begin the search with
     * @returns <List> list of all values found during BFS
     */
    // BFSPureRecursive(current=this.root){
    //     let data = [];
    //     if(current === null) return data;
    //     data.push(current.val);
    //     if(current.left) {
    //         data = data.concat(this.BFSPureRecursive(current.left));
    //     }
    //     if(current.right) {
    //         data = data.concat(this.BFSPureRecursive(current.right));
    //     }
    //     return data;
    // }
    /**
     * @description performs depth first pre order traversal
     * @returns <List> list of all values found during BFS
     */
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traversal(node){
            data.push(node.val);
            if(node.left) traversal(node.left);
            if(node.right) traversal(node.right);
        }
        traversal(current);
        return data;
    }
    /**
     * @description performs depth first post order traversal
     * @param <Node> Node to begin the search with
     * @returns <List> list of all values found during BFS
     */
    DFSPostOrder(){
        let data = [];
        function traversal(node){
            if(node.left) traversal(node.left);
            if(node.right) traversal(node.right);
            data.push(node.val);
        }
        traversal(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function traversal(node){
            if(node.left) traversal(node.left);
            data.push(node.val);
            if(node.right) traversal(node.right);
        }
        traversal(this.root);
        return data;
    }
}

module.exports = BinarySearchTree;