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
    if (index >= 0 && index < this.length) {
        var pointer = 0
        var currentNode = this.head
        while (index !== pointer) {
            pointer += 1
            currentNode = currentNode.next
        }
        return currentNode
    } else {
        return -1
    }
};

MyLinkedList.prototype.getTailNode = function () {
    return this.tail
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new MyNode(val, this.head, null)
    if (this.head) {
        this.head.prev = node
    } else {
        this.tail = node
    }
    this.head = node
    this.length += 1
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = new MyNode(val, null, null)
    var currentNode = this.head
    if (!this.head) {
        this.head = node
        this.tail = node
    } else {
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node
        node.prev = currentNode
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
        var pointer = 1
        var prevNode = this.head
        var currentNode = this.head.next
        while (pointer !== index && currentNode) {
            prevNode = currentNode
            currentNode = currentNode.next
            pointer += 1
        }
        var node = new MyNode(val, currentNode, prevNode)
        prevNode.next = node
        currentNode.prev = node
        this.length += 1
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.length && this.length > 0) {
        if (index === 0) {
            this.head = this.head.next
            // 这里考虑到，如果长度等于1是，做一个容错判断
            if (this.head) {
                this.head.prev = null
            } else {
                // 如果长度是1
                this.tail = null
            }
        } else {
            let pointer = 1
            let prevNode = this.head
            let currentNode = this.head.next
            while (pointer !== index && currentNode.next) {
                prevNode = currentNode
                currentNode = currentNode.next
                pointer += 1
            }
            prevNode.next = prevNode.next.next
            // 这里考虑到，如果时删除最后一个，做一个容错的判断
            if (prevNode.next) {
                prevNode.next.prev = prevNode
            } else {
                this.tail = prevNode
            }
        }
        this.length -= 1
    }
};

/**
 * @param {MyNode} node
 * @return {void}
 */
MyLinkedList.prototype.delete = function (node) {
    if (node && this.length > 0) {
        var prevNode = node.prev
        var nextNode = node.next
        if (!prevNode) {
            // 需要删除的是链表的头部
            this.head = node.next
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null
            }
        } else if (!nextNode) {
            // 需要删除的是链表的尾巴
            if (!prevNode) {
                this.tail = null
                this.head = null
            } else {
                prevNode.next = null
                this.tail = prevNode
            }
        } else {
            prevNode.next = nextNode
            nextNode.prev = prevNode
        }
        this.length -= 1
    }
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = MyLinkedList
