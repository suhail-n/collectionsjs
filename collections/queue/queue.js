class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val) {
        let n = new Node(val);
        if (!this.head) {
            this.head = n;
            this.tail = n;
        }
        else {
            this.tail.next = n;
            this.tail = n;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.head) return null;
        let popped = this.head;
        let poppedVal = popped.val;
        if (this.head === this.tail) {
            this.tail = null;
        }
        this.head = this.head.next;
        popped.next = null;
        this.size--
        return poppedVal;
    }
}

module.exports = Queue;