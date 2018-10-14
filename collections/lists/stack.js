class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let n = new Node(val);
    if (!this.head) {
      this.head = n;
      this.tail = this.head;
    } else {
      n.next = this.head;
      this.head = n;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (!this.head) return null;
    let poppedN = this.head;
    let val = poppedN.val;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    poppedN.next = null;
    return val;
  }

}
module.exports = Stack;