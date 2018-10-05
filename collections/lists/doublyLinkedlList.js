class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * @description add node at the end of the doubly linkedlist
     * @param <T> val 
     * @returns <DoublyLinkedList>
     */
    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    /**
     * @description remove node at the end of the doubly linkedlist
     * @returns <Node> removed node
     */
    pop(){
        if(!this.head) return null;
        let removed = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        removed.prev = null;
        return removed;
    }

    /**
     * @description remove node at the beginning
     * @returns <Node> removed node
     */
    shift(){
        if(!this.head) return null;
        let removed = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removed.next;
            this.head.prev = null;
        }
        removed.next = null;
        this.length--;
        return removed;
    }
    /**
     * @description add node at the beginning
     * @param <T> val
     * @returns <DoublyLinkedList> 
     */
    unshift(val){
        if(!this.head) return this.push(val);
        let node = new Node(val);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    }
    /**
     * @description get node at index
     * @param <Number> index
     * @returns <Node> found node
     */
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(!this.head) return null;
        let curNode;
        if(index <= this.length / 2){
            let pos = 0;
            curNode = this.head;
            while(pos !== index){
                curNode = curNode.next;
                pos++;
            }
        } else {
            let pos = this.length - 1;
            curNode = this.tail;
            while(pos !== index){
                curNode = curNode.prev;
                pos--;
            }
        }
        return curNode;
    }

    /**
     * @description replace value at index with given value
     * @param <Number> index
     * @param <T> val 
     * @returns <boolean> 
     */
    set(index, val){
        let found = this.get(index);
        if(!found) return false;
        found.val = val;
        return true;
    }
    /**
     * @description insert node at the given position
     * @param <Number> index
     * @param <T> val
     * @returns <boolean>
     */
    insert(index, val){
        if(index < 0 || index >= this.length) return null;
        if(this.length - 1 === index) {
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        let node = new Node(val)

        prevNode.next = node;
        node.prev = prevNode;
        nextNode.prev = node;
        node.next = nextNode;
        this.length++;
        return true;
    }
    /**
     * @description remove node at the given position
     * @param <Number> index
     * @returns <Node> node
     */
    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(this.length - 1 === index) return this.pop();
        if(index === 0) return this.shift();
        
        let deleted = this.get(index);
        let prevNode = deleted.prev;
        let nextNode = deleted.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        deleted.next = null;
        deleted.prev = null;
        this.length--;
        return deleted;

    }

}

module.exports = DoubleLinkedList;