"use strict";
exports.__esModule = true;
/**
 * 自己实现的单链表版本
 */
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(ele, next) {
        if (ele === void 0) { ele = null; }
        if (next === void 0) { next = null; }
        this.ele = ele;
        this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head, tail, length) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        if (length === void 0) { length = 0; }
        this.head = head;
        this.tail = tail;
        this.length = length;
    }
    /**
     * 获取任意位置的元素
     */
    LinkedList.prototype.at = function (position) {
        if (position >= 0 && position < this.length) {
            var currentNode = this.head;
            var index = 0;
            while (index !== position) {
                currentNode = currentNode.next;
                index += 1;
            }
            return currentNode;
        }
        else {
            return null;
        }
    };
    /**
     * 从后面向链表中添加节点
     */
    LinkedList.prototype.append = function (ele) {
        // 从后面添加, 节点的next必然为null, 因为它本身就是最后一项
        var node = new LinkedListNode(ele, null);
        if (this.head === null || this.tail === null) {
            // 链表长度为0的情况下
            this.head = node;
            this.tail = node;
        }
        else {
            // 链表长度不为0的情况下, 新添加的节点将成为tail
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    };
    /**
     * 从前面向链表中添加节点
     */
    LinkedList.prototype.prepend = function (ele) {
        // 新添加的节点的next必然指向当前链表的head
        var node = new LinkedListNode(ele, this.head);
        this.head = node;
        if (this.tail === null) {
            // 链表长度为0的情况下
            this.tail = node;
        }
        this.length += 1;
        return this;
    };
    /**
     * 任意位置插入
     */
    LinkedList.prototype.insert = function (position, ele) {
        if (position >= 0 && position <= this.length) {
            var node = null;
            // 从头插入的情况下
            if (position === 0) {
                return this.prepend(ele);
            }
            else if (position === this.length) {
                return this.append(ele);
            }
            else {
                var index = 1;
                var currentNode = this.head.next;
                var prevCurrentNode = this.head;
                // 遍历链表
                while (currentNode) {
                    if (index === position) {
                        node = new LinkedListNode(ele, currentNode);
                        prevCurrentNode.next = node;
                        this.length += 1;
                        return this;
                    }
                    else {
                        currentNode = currentNode.next;
                    }
                }
            }
        }
        else {
            return false;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var index = 0;
        var currentNode = this.head;
        while (currentNode.ele !== value) {
            currentNode = currentNode.next;
            index += 1;
        }
        return index;
    };
    LinkedList.prototype.find = function (value) {
        var currentNode = this.head;
        var isEmpty = false;
        while (currentNode) {
            if (currentNode.ele === value) {
                isEmpty = true;
                return isEmpty;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return isEmpty;
    };
    LinkedList.prototype.remove = function (value) {
    };
    /**
     * 移除链表中任意位置的元素
     */
    LinkedList.prototype.removeAt = function (position) {
        // 越界判断
        if (position >= 0 && position < this.length) {
            if (position === 0) {
                // 删除第一个的情况下
                return this.removeHead();
            }
            else if (position === this.length - 1) {
                return this.removeTail();
            }
            else {
                // 删除不是第一个情况下, 也不是第一个的情况
                // 需要删除的节点
                var removeNode = this.head.next;
                // 需要删除的节点的前一个节点
                var prevRemoveNode = this.head;
                var index = 1;
                while (index !== position) {
                    prevRemoveNode = removeNode;
                    removeNode = removeNode.next;
                    index += 1;
                }
                // 绕过需要删除的节点, 重新链接链表
                prevRemoveNode.next = prevRemoveNode.next.next;
                this.length -= 1;
                return removeNode;
            }
        }
        else {
            return null;
        }
    };
    LinkedList.prototype.removeHead = function () {
        if (this.length > 0) {
            var removeNode = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return removeNode;
        }
        else {
            return null;
        }
    };
    LinkedList.prototype.removeTail = function () {
        // 删除是最后的一个情况
        if (this.length > 0) {
            var removeNode = this.tail;
            var currentNode = this.head.next;
            var prevNode = this.head;
            var index = 1;
            // 找到最后一个的前一个，修改它的next的指向
            while (index !== this.length - 1) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                index += 1;
            }
            prevNode.next = null;
            this.tail = prevNode;
            this.length -= 1;
            return removeNode;
        }
        else {
            return null;
        }
    };
    LinkedList.prototype.fromArray = function () {
    };
    LinkedList.prototype.toArray = function () {
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
