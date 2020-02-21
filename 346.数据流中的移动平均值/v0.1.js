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

// 得到队列的实际大小
MyCircularQueue.prototype.size = function () {
    let size = 0
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i] !== 'empty') {
            size += 1
        }
    }
    return size
}

// 得到队列的和
MyCircularQueue.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i] !== 'empty') {
            sum = sum + this.queue[i]
        }
    }
    return sum
}

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

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.queue[this.head]
    }
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.queue[this.tail]
    }
};

MyCircularQueue.prototype.isEmpty = function() {
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i] !== 'empty') {
            return false
        }
    }
    return true
};

MyCircularQueue.prototype.isFull = function() {
    return !this.queue.includes('empty')
};

// ====== 本题需要使用到循环队列的结构 =======

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.q = new MyCircularQueue(size)
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.q.enQueue(val)
    const size = this.q.size()
    const sum = this.q.sum()
    return sum / size
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
