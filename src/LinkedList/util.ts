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

/**
 * 【一个重要的思想，生成一个假头】使用 new ListNode(0), 生成一个虚假的头部
 * 最后返回的结果的时候可以忽略这个家头
 * 【另一个重要的思想，同时保留链表头部和尾部的引用】
 * let newHead = new ListNode(0)
 * let newTail = newHead
 * let newNode = new ListNode(1)
 * newTail.next = newNode
 * newTail = newTail.next
 */

/**
 * 奇偶链表
 * 奇偶两条链，就是使用 new ListNode(0),这种方式生成的
 */
function oddEvenList (head: LinkedListNode): LinkedListNode {
  let oddHead: LinkedListNode = new LinkedListNode(0)
  let evenHead: LinkedListNode = new LinkedListNode(0)
  let oddTail: LinkedListNode = oddHead
  let evenTail: LinkedListNode = evenHead
  let index: number = 1
  
  while (head) {
      // 链接不同奇偶两条链
      // 这里默认开头是1，所以index从1开始
      if (index % 2 !== 0) {
          oddTail.next = head
          oddTail = oddTail.next
      } else {
          evenTail.next = head
          evenTail = evenTail.next
      }
      head = head.next
      index += 1
  }
  
  // 偶数链的结尾是null，因为是尾部
  evenTail.next = null
  // 忽略到假头
  oddTail.next = evenHead.next
  
  return oddHead.next
}

/**
 * 回文链表
 * 一开始我的相反是反转整个链表进行对比，但是发现如果反转整个链表，就相当于改变整个链表，没有办法进行对比了
 * 所以取中点，中点以后的进行反转对比，但是需要注意这几种情况
 * [] 链表为空，是回文链表
 * [0, 0] 依然是回文链表
 * 获取中点的方式是使用快慢指针
 */
function isPalindrome (head: LinkedListNode): boolean {
  if (!head) {
    return true
  }

  // 通过快慢指针获取中点
  let fast: LinkedListNode = head
  let slow: LinkedListNode = head

  // 链表中点
  let middle = null

  // 循环结束后慢节点就是链表的中点
  while (fast && fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
  }

  // 一个和两个的情况
  if (fast === slow) {
      if (!fast.next) {
          return true
      } else if ( fast.val === fast.next.val ) {
          return true
      } else {
          return false
      }
  }

  // middle保持对中点的引用
  // slow往后移动
  middle = slow

  // 反转中点以后的链表
  function reverse () {
      let a = slow.next
      let b = slow.next.next
      a.next = middle
      slow.next = b
      middle = a
  }

  while (slow && slow.next) {
      reverse()
  }

  // 从头部和中点开始对比
  while (head && middle) {
      
      if (head.val !== middle.val) {
          return false
      }
      
      head = head.next
      middle = middle.next
      
  }

  return true    
}

/**
 * 合并两个链表
 */
function mergeTwoLists (l1: LinkedListNode, l2: LinkedListNode): LinkedListNode {
  // 头部的引用
  let newHead: LinkedListNode = new LinkedListNode(0)
  // 尾部的引用
  let newTail: LinkedListNode = newHead
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          newTail.next = l1
          l1 = l1.next
      } else {
          newTail.next = l2
          l2 = l2.next
      }
      // 始终指向尾部
      newTail = newTail.next
  }
  
  if (!l1) {
      newTail.next = l2
  }
  
  if (!l2) {
      newTail.next = l1
  }
  
  return newHead.next
}

/**
 * 两个链表进行相加
 */
function addTwoNumbers (l1: LinkedListNode, l2: LinkedListNode): LinkedListNode {
    let newHead: LinkedListNode = new LinkedListNode(0)
    let newTail: LinkedListNode = newHead
    // carry是近卫，8 + 8 = 16 ，进位为1
    let carry: number = 0
    while (l1 || l2) {
        let a: number = l1 ? l1.val : 0
        let b: number = l2 ? l2.val : 0
        // val是保留的位
        let val: number = (a + b + carry) % 10
        carry = Math.floor((a + b + carry) / 10)
        let newNode = new LinkedListNode(val)
        newTail.next = newNode
        newTail = newTail.next
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (carry !== 0) {
        // 注意最后一位的进位
        let newNode: LinkedListNode = new LinkedListNode(carry)
        newTail.next = newNode
        newTail = newTail.next
    }
    
    return newHead.next
}

