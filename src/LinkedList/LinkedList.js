"use strict";
exports.__esModule = true;
var LinkedListNode_1 = require("./LinkedListNode");
var lodash_1 = require("lodash");
/**
 * 链表类
 */
var LinkedList = /** @class */ (function () {
    /**
     * 构造函数
     * this.head 链表的头部
     * this.tail 链表的尾部
     */
    function LinkedList(head, tail) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        this.head = head;
        this.tail = tail;
    }
    /**
     * 从链表前部添加一个节点
     */
    LinkedList.prototype.prepend = function (value) {
        var newNode = new LinkedListNode_1["default"](value, this.head);
        this.head = newNode;
        // 如果tail不存在head既是head也是tail
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    /**
     * 从链表后部添加一个节点
     */
    LinkedList.prototype.append = function (value) {
        var newNode = new LinkedListNode_1["default"](value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // 如果存在尾部的节点, 当前尾部的节点的next指向newNode, 并且newNode变成新的尾部
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    /**
     * 删除一个节点
     */
    LinkedList.prototype["delete"] = function (value) {
        var deleteNode = null;
        var currentNode = null;
        // 如果尾部或者头部不存在, 说明链表为空
        if (!this.head || !this.tail) {
            return deleteNode;
        }
        // 如果删除的节点等于头部的节点
        while (this.head && lodash_1.isEqual(this.head, value)) {
            deleteNode = this.head;
            // 头部变为当前头部的next
            this.head = this.head.next;
        }
        currentNode = this.head;
        // 从头部开始循环查找链表
        if (currentNode !== null) {
            while (currentNode.next) {
                if (lodash_1.isEqual(currentNode.next.value, value)) {
                    // 删除的节点
                    deleteNode = currentNode.next.value;
                    // 跳过删除的节点进行链接删除的节点的下一个节点
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        return deleteNode;
    };
    /**
     * 查找一个节点
     */
    LinkedList.prototype.find = function (value) {
        var isHave = false;
        var currentNode = null;
        if (!this.head || !this.tail) {
            return isHave;
        }
        currentNode = this.head;
        // 循环查找链表
        while (currentNode) {
            if (value !== undefined && lodash_1.isEqual(currentNode.value, value)) {
                isHave = true;
            }
            currentNode = currentNode.next;
        }
        return isHave;
    };
    /**
     * 删除尾部
     */
    LinkedList.prototype.deleteTail = function () {
        var currentNode = null;
        // 如果链表中只存在一位
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        currentNode = this.head;
        // 循环列表查找next为null的节点，此节点为tail
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        return currentNode;
    };
    /**
     * 删除头部
     */
    LinkedList.prototype.deleteHead = function () {
        var currentNode = null;
        if (!this.head) {
            return null;
        }
        currentNode = this.head;
        // 如果存在下一个，将当前的head.next作为head
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    };
    /**
     * 将链表格式化为数组
     */
    LinkedList.prototype.toArray = function () {
        var nodes = [];
        var currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    };
    /**
     * 将数组格式化为链表
     */
    LinkedList.prototype.fromArray = function (arr) {
        var _this = this;
        arr.forEach(function (a) { return _this.append(a); });
        return this;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
