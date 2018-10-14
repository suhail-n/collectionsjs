const chai = require("chai");
const Stack = require("../../collections/lists/stack");
const should = chai.should();

describe("Stack", function () {
    let stack;
    beforeEach(function () {
        stack = new Stack();
    })
    it("should set head and tail to null, and length to 0 when instantiated", function () {
        should.equal(stack.tail, null);
        should.equal(stack.head, null);
        stack.length.should.equal(0);
    });
    it("should return stack length when element is pushed", function () {
        let len = stack.push("first");
        len.should.equal(1);
        should.exist(stack.head);
        should.exist(stack.tail);
    });
    it("should return the null when calling pop on an empty stack", function () {
        let val = stack.pop();
        should.equal(val, null);
    });
    it("should return the value of the popped element and update length", function () {
        stack.push("first");
        stack.push("second");
        let popped = stack.pop();
        popped.should.equal("second");
        stack.length.should.equal(1);
    });
    it("should set head and tail to null when all items are popped off", function () {
        stack.push("first");
        stack.pop();
        stack.length.should.equal(0);
        should.equal(stack.head, null);
        should.equal(stack.tail, null);
    });

});