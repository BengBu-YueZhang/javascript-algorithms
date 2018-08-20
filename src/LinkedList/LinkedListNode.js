"use strict";
exports.__esModule = true;
/**
 * 链表节点类
 */
var LinkedListItem = /** @class */ (function () {
    function LinkedListItem(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkedListItem;
}());
exports["default"] = LinkedListItem;
