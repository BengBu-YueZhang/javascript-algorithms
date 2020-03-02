/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    // 一个假头
    let newHead = {
        val: null,
        next: null
    }
    let isComplete = false


    const getTail = (node) => {
        let prev = node
        let current = node.next
        while (current && current.next) {
            prev = current
            current = current.next
        }
        if (current) {
            prev.next = null
            return current
        }
        isComplete = true
        return prev
    }

    const reverse = (node) => {
        if (isComplete) {
            return
        }
        const tail = getTail(head)
        node.next = tail
        reverse(node.next)
    }

    reverse(newHead)

    return newHead.next
};

