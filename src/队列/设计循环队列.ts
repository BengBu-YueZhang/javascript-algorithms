/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k)
  this.head = -1
  this.tail = -1
  this.length = k
};

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
         this.queue[0] = value
         this.head = this.tail = 0
     } else {
          for (let i = 0; i < this.length; i++) {
             if (this.queue[i] === undefined) {
                 this.queue[i] = value
                 this.tail = i
                 break
             }
         } 
     }
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
      if (this.head === this.tail) {
          this.queue.splice(this.head, 1)
          this.head = -1
          this.tail = -1
      } else {
          this.queue.splice(this.head, 1)
          this.head += 1
          if (this.head >= this.length) {
              this.head = 0
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
  if (this.head === -1) {
      return this.head
  } else {
      return this.queue[this.head]
  }
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.tail === -1) {
      return this.tail
  } else {
      return this.queue[this.tail]
  }
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  for (let i = 0; i < this.length; i++) {
      if (this.queue[i] !== undefined) {
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
  let index = this.queue.indexOf(undefined)
  return index === -1 ? true : false
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = Object.create(MyCircularQueue).createNew(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/