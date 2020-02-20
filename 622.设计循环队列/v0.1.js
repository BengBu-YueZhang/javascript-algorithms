/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.len = k
    this.init()
};

MyCircularQueue.prototype.init = function () {
    this.head = -1
    this.tail = -1
    this.queue = new Array(this.len)
    this.queue.fill('empty')
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    } else {
        if (this.isEmpty()) {
            this.tail = this.head = 0
        } else {
            if (this.tail === this.len - 1) {
                this.tail = 0
            } else {
                this.tail += 1
            }
        }
        this.queue[this.tail] = value
        return true
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false
    } else {
        if (this.tail === this.head) {
            // 重置整个队列
            this.init()
        } else {
            this.queue.splice(this.head, 1, 'empty')
            if (this.head === this.len - 1) {
                this.head = 0
            } else {
                this.head += 1
            }
        }
        return true
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.queue[this.head]
    }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.queue[this.tail]
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i] !== 'empty') {
            return false
        }
    }
    return true
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return !this.queue.includes('empty')
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
