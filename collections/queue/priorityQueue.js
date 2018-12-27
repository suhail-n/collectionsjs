class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
        this.length = 0;
    }

    enqueue(val, priority) {
        const n = new Node(val, priority);
        this.values.push(n);
        this.bubbleUp();
        this.length = this.values.length;
    }

    bubbleUp() {
        let i = this.values.length - 1;
        while (true) {
            let parentInd = Math.floor((i - 1) / 2);
            if (parentInd < 0 || this.values[i]['priority'] >= this.values[parentInd]['priority']) break;
            if (this.values[i]['priority'] < this.values[parentInd]['priority']) {
                [this.values[i], this.values[parentInd]] = [this.values[parentInd], this.values[i]];
                i = parentInd;
            }
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end;
            this.trickleDown();
        }
        this.length = this.values.length;
        return min;
    }

    trickleDown() {
        let i = 0;
        while (true) {
            let leftChildPos = (i * 2) + 1;
            let rightChildPos = (i * 2) + 2;
            let swap = null;
            if (leftChildPos < this.values.length) {
                if (this.values[leftChildPos]['priority'] < this.values[i]['priority']) {
                    swap = leftChildPos;
                }
            }
            if (rightChildPos < this.values.length) {
                if (
                    (swap === null && this.values[rightChildPos]['priority'] < this.values[i]['priority']) ||
                    (swap !== null && this.values[rightChildPos]['priority'] < this.values[leftChildPos]['priority'])) {
                    swap = rightChildPos;
                }
            }
            if (swap === null) break;
            [this.values[swap], this.values[i]] = [this.values[i], this.values[swap]];
            i = swap;
        }
    }
}

module.exports = PriorityQueue;