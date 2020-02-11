var MyNode = function (val, next, prev) {
    this.val = val
    this.next = next
    this.prev = prev
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.length || this.length === 0) {
        return -1
    } else {
        var currentIndex = null
        var currentNode = null
        // 减少遍历的次数
        if (index < this.length / 2) {
            currentIndex = 0
            currentNode = this.head
            while (currentIndex !== index) {
                currentIndex += 1
                currentNode = this.head.next
            } 
        } else {
            currentIndex = this.length - 1
            currentNode = this.tail
            while (currentIndex !== index) {
                currentIndex -= 1
                currentNode = this.tail.prev
            }
        }
        return currentNode.val
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new MyNode(val, null, null)
    if (!this.head) {
        this.head = node
        this.tail = this.head
    } else {
        var head = this.head
        node.next = head
        head.prev = node
        this.head = node
    }
    this.length += 1
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = new MyNode(val, null, null)
    if (!this.tail) {
        this.tail = node
        this.head = this.tail
    } else {
        var tail = this.tail
        node.prev = tail
        tail.next = node
        this.tail = node
    }
    this.length += 1
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= 0) {
        this.addAtHead(val)
    } else if (index === this.length) {
        this.addAtTail(val)
    } else if (index > 0 && index < this.length) {
        var node = new MyNode(val, null, null)
        var currentIndex = null
        var currentNode = null
        var prevNode = null
        if (index < this.length / 2) {
            currentIndex = 0
            currentNode = this.head
            while (currentIndex !== index) {
                currentIndex += 1
                currentNode = this.head.next
            }
        } else {
            currentIndex = this.length - 1
            currentNode = this.tail
            while (currentIndex !== index) {
                currentIndex -= 1
                currentNode = this.tail.prev
            }
        }
        prevNode = currentNode.prev
        prevNode.next = node
        node.prev = prevNode
        currentNode.prev = node
        node.next = currentNode
        this.length += 1
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // index有效的范围
    if (index >= 0 && index < this.length - 1) {
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            if (index === 0) {
                var head = this.head
                var newHead = this.head.next
                newHead.prev = null
                this.head = newHead
                this.length -= 1
            } else if (index === this.length - 1) {
                var tail = this.tail
                var newTail = this.tail.prev
                newTail.next = null
                this.tail = newTail
                this.length -= 1
            } else if (index > 0 && index < this.length - 1) {
                var currentIndex = null
                var currentNode = null
                var prevNode = null
                var nextNode = null
                if (this.index < this.length / 2) {
                    currentIndex = 0
                    currentNode = this.head
                    while (currentIndex !== index) {
                        currentIndex += 1
                        currentNode = this.head.next
                    }
                } else {
                    currentIndex = this.length - 1
                    currentNode = this.tail
                    while (currentIndex !== index) {
                        currentIndex -= 1
                        currentNode = this.tail.prev
                    }
                }
                prevNode = currentNode.prev
                nextNode = currentNode.next
                prevNode.next = nextNode
                nextNode.prev = prevNode
                this.length -= 1
            }
        }
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
