/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = -1
    this.tail = -1
    this.len = k
    this.queue = []
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    const length = this.queue.length
    if (length >= this.len) {
        // 如果队列是已经满了的情况下
        return false
    } else {
        // 如果队列不是满了的情况
        if (this.tail === this.len - 1) {
            // 如果尾巴在队列的最后面，那么把尾巴移动到数组的头部
            this.tail = 0
        } else {
            // 如果尾巴不是在队列的最后面，每一次的插入都插到尾巴的后面
            this.tail += 1
            // 如果队列是空的情况下，不仅仅要设置尾巴还要设置头
            if (this.tail === 0) {
                this.head = 0
            }
        }
        this.queue.splice(this.tail, 0, value)
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    
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