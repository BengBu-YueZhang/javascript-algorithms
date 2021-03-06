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
        return currentNode.val
    } else {
        return -1
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new MyNode(val, this.head, null)
    if (this.head) {
        this.head.prev = node
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
    } else {
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node
        node.prev = currentNode
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
            }
        }
        this.length -= 1
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
