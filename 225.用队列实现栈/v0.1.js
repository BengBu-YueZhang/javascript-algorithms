class Queue {
    constructor () {
        this.queue = []
    }
    push (v) {
        this.queue.push(v)
    }
    pop () {
        return this.queue.shift()
    }
    size () {
        return this.queue.length
    }
    isEmpty () {
        return this.queue.length === 0
    }
    top () {
        return this.queue[0]
    }
}

// 队列先进先出
// 栈后进先出

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.mainQueue = new Queue()
    this.viceQueue = new Queue()
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if (this.mainQueue.isEmpty()) {
        this.mainQueue.push(x)
    } else {
        while(!this.mainQueue.isEmpty()) {
            this.viceQueue.push(this.mainQueue.pop())
        }
        this.mainQueue.push(x)
        while(!this.viceQueue.isEmpty()) {
            this.mainQueue.push(this.viceQueue.pop())
        }
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.mainQueue.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.mainQueue.top()
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.mainQueue.isEmpty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
