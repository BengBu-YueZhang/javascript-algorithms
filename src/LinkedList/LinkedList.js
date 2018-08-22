"use strict";
exports.__esModule = true;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val, next) {
        if (val === void 0) { val = null; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head, length) {
        if (head === void 0) { head = null; }
        if (length === void 0) { length = 0; }
        this.head = head;
        this.length = length;
    }
    LinkedList.prototype.get = function (index) {
        if (index >= 0 && index < this.length) {
            var pointer = 0;
            var currentNode = this.head;
            while (index !== pointer) {
                pointer += 1;
                currentNode = currentNode.next;
            }
            return currentNode.val;
        }
        else {
            return -1;
        }
    };
    LinkedList.prototype.addAtHead = function (val) {
        var newNode = new LinkedListNode(val, this.head);
        this.head = newNode;
        this.length += 1;
    };
    LinkedList.prototype.addAtTail = function (val) {
        var newNode = new LinkedListNode(val, null);
        var currentNode = this.head;
        if (!this.head) {
            this.head = newNode;
        }
        else {
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length += 1;
    };
    LinkedList.prototype.addAtIndex = function (index, val) {
        if (index >= 0 && index <= this.length) {
            var newNode = null;
            if (index === 0) {
                this.addAtHead(val);
            }
            else {
                var pointer = 1;
                var prevNode = this.head;
                var currentNode = this.head.next;
                while (pointer !== index && currentNode) {
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                    pointer += 1;
                }
                // 中间插入
                newNode = new LinkedListNode(val, currentNode);
                prevNode.next = newNode;
                this.length += 1;
            }
        }
    };
    LinkedList.prototype.deleteAtIndex = function (index) {
        if (index >= 0 && index < this.length && this.length > 0) {
            if (index === 0) {
                this.head = this.head.next;
            }
            else {
                var pointer = 1;
                var prevNode = this.head;
                var currentNode = this.head.next;
                while (pointer !== index && currentNode.next) {
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                    pointer += 1;
                }
                prevNode.next = prevNode.next.next;
            }
            this.length -= 1;
        }
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
