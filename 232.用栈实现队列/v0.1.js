class Stack {
    constructor () {
        this.stack = []
    }

    push (v) {
        this.stack.push(v)
    }

    pop () {
        return this.stack.pop()
    }

    top () {
        return this.stack[this.stack.length - 1]
    }

    size () {
        return this.stack.length
    }

    isEmpty () {
        return this.stack.length === 0
    }
}

// 栈是，后入先出
// 队列，先进先出

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.mainStack = new Stack()
    this.viceStack = new Stack()
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.mainStack.isEmpty()) {
        this.mainStack.push(x)
    } else {
        while (!this.mainStack.isEmpty()) {
            this.viceStack.push(this.mainStack.pop())
        }
        this.mainStack.push(x)
        while(!this.viceStack.isEmpty()) {
            this.mainStack.push(this.viceStack.pop())
        }
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.mainStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack.top()
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.isEmpty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
