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
 */
function hasCross (): LinkedList {
}