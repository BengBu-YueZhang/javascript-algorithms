import { LinkedList, LinkedListNode } from './LinkedList'

/**
 * 检测链表是否有环
 * 判断链表是否相交的思路，是使用快慢指针的方式。快指针一次移动next.next的位置。而慢指针一次移动next的位置
 * 如果链表成环，那么快慢指针最终会相遇
 */
function hasCycle (head: LinkedListNode): boolean {
  // 快指针
  let flst = head
  // 慢指针
  let slow = head
  while (flst && flst.next && flst.next.next) {
    flst = flst.next.next
    slow = flst.next
    if (flst === slow) {
      return true
    }
  }
  return false
}

/**
 * 检测链表的环的入口
 * 思路同快慢指针判断是否成环一次，不同的是需要找出环的的入口
 * 如果快指针的速度是慢指针的两倍，快指针与慢指针相遇的的时候，快指针移动了两倍距离与慢指针。
 * 也就是说快指针进入环的第二圈
 * 如果链表只有部分是环结构，那么他们相遇的点，距离入口和起点距离入口距离是一致的
 * 起点距离入口距离为a
 * 环的周长是b
 * 相遇的点距离入口是c
 * a + b + c - c = 2 * ( a + b - c)
 * a - c = 2a - 2c
 * 必然a和c是相等的
 * 那么快指针和慢指针相遇的点和起点距离入口的位置是一致的
 */
function hasCycleEntrance (head: LinkedListNode): LinkedListNode | Boolean {
  // 快指针
  let flst = head
  // 慢指针
  let slow = head
  while (flst && flst.next && flst.next.next) {
    flst = flst.next.next
    slow = flst.next
    if (flst === slow) {
      // 变道起点
      flst = head
      // a 和 c距离是一致的
      // 每一次移动一个next，必然会在入口出相遇
      while (flst !== slow) {
        flst = flst.next
        slow = slow.next
      }
      return flst
    }
  }
  return false
}

/**
 * 检测链表是否相交, 并找到交叉的入口
 * 这道题目的思路如下，链表a，与链表b，如果相交，将a的尾巴连到b的头部，相交的链表会形成环，然后沿用上面两题的思路就可以了
 */
function hasCross (headA: LinkedListNode, headB: LinkedListNode): LinkedListNode {
  if (headA && headB) {
        
    // 自身相等的情况下
    if (headA === headB) {
        return headA
    }
    
    // a链子的结尾连上b链的头部
    let lastA: LinkedListNode = headA
    let lastB: LinkedListNode = headB
    
    while (lastA && lastA.next) {
        lastA = lastA.next
    }
    
    lastA.next = headB
    
    let fast: LinkedListNode = headA
    let slow: LinkedListNode = headA
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) {
            fast = headA
            
            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
                
                if (slow === fast) {
                    lastA.next = null
                    return slow
                }
            }
            lastA.next = null
            return fast
        } 
    }
    lastA.next = null  
    return null  
  } 
}

/**
 * 反转链表
 * 思路
 *  1 -> 2 -> 3 -> null
 *  2 -> 1 -> 3 -> null
 *  3 -> 2 -> 1 -> null
 */
function reverse (head: LinkedListNode): LinkedListNode {

  let newHead:LinkedListNode = head
    
    function unknown () {
        let a = head.next
        let b = head.next.next
        a.next = newHead
        head.next = b
        newHead = a
    }
    
    while (head && head.next) {
       unknown() 
    }
    return newHead
}

/**
 * 给定对应的number删除链表中的节点
 */
function removeElements (head: LinkedListNode, val: number): LinkedListNode {
  function deleteHead () {
    head = head.next
    if (head && head.val === val) {
        deleteHead()
    }
  } 

  if (head) {
      if (head.val === val) {
          // 递归删除头部的节点
          deleteHead()
      }

      if (head && head.next) {
        let prevNode = head
        let currentNode = head.next

        while (currentNode) {
          // 删除链表中间符合条件的节点
            if (currentNode.val === val) {
                prevNode.next = currentNode.next
                currentNode = currentNode.next
            } else {
                prevNode = prevNode.next
                currentNode = currentNode.next
            }
        }
      }  
  }
  return head
}