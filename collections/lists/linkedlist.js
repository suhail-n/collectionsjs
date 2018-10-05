class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push value to the end of linkedlist
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    // remove last item and return;
    pop(){
        if(!this.head) return null;

        let curHead = this.head;
        let curTail = curHead;
        while(curHead.next){
            curTail = curHead;
            curHead = curHead.next;
        }
        curTail.next = null;
        this.tail = curTail;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curHead;

    }
    // remove the first item and return
    shift(){
        if(!this.head) return null;
        let curHead = this.head;
        this.head = curHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return curHead;
    }

    // add to the beginning of the list
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    // return node at index;
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(!this.head) return null;

        let curNode = this.head;
        let pos = 0;
        while(curNode && pos != index){
            curNode = curNode.next;
            pos++;
        }
        return curNode || null;
    }

    // update value at index
    set(index, val){
        let node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    // insert a new node at specified position
    insert(index, val){
        if(index < 0 || index >= this.length) return null;
        if(this.length === index) {
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }

        let curNode = new Node(val);
        let prevNode = this.get(index - 1);
        if(prevNode){
            let tempN = prevNode.next;
            prevNode.next = curNode;
            curNode.next = tempN;
            this.length++;
            return true;
        }
        return false;

    }
    // remove node at index
    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        if(!prevNode) return null;
        let delNode = prevNode.next;
        prevNode.next = delNode.next;
        this.length--;
        return delNode;
    }

    //reverse linkedlist
    reverse(){
        if(!this.head || this.length === 1) return;
        let curN = this.head;
        let nNode = null;
        let prevN = null;
        let newTail = curN; 
        while(curN.next){
            nNode = curN.next;
            curN.next = prevN;
            prevN = curN;
            curN = nNode;
        }
        curN.next = prevN;
        this.head = curN;
        this.tail = newTail;
    }
}

module.exports = {
    LinkedList
};
