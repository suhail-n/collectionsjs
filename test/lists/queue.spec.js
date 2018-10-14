const chai = require("chai");
const should = chai.should();
const Queue = require("../../collections/queue/queue");

describe("Queue", function () {
    let queue;
    beforeEach(function () {
        queue = new Queue();
        queue.enqueue("FIRST");
    });
    it("should set head and tail to the new element when executing enqueue of an empty queue", function () {
        queue.size.should.equal(1);
        should.exist(queue.head);
        should.exist(queue.tail);
        queue.head.should.equal(queue.tail);
    });
    it("should add following elements to the tail with first element at the queue", function () {
        let len = queue.enqueue("SECOND");
        len.should.equal(2);
        queue.tail.val.should.equal("SECOND");
        queue.head.val.should.equal("FIRST");
    });
    it("should remove an element from the head of the queue, decrement size, and return the val", function () {
        queue.enqueue("SECOND");
        let val = queue.dequeue();
        val.should.equal("FIRST");
        queue.size.should.equal(1);
    });
    it("should set head and tail to null when the last element is dequeued", function () {
        let val = queue.dequeue();
        val.should.equal("FIRST");
        should.equal(queue.head, null);
        should.equal(queue.tail, null);
        queue.size.should.equal(0);
    });
    it("should remove the head element and replace it with the next one when dequeue is called", function () {
        queue.enqueue("SECOND");
        queue.dequeue();
        queue.size.should.equal(1);
        queue.head.val.should.equal("SECOND");
    });
    it("should return null when the calling dequeue on an empty queue", function () {
        let q = new Queue();
        let val = q.dequeue();
        should.equal(val, null);
    });
});