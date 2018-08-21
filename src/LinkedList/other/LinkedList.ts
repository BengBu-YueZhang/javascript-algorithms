/**
 * 自己实现的单链表版本
 */
class LinkedListNode {
  constructor (
    public ele: any = null,
    public next: any = null
  ) {
  }
}

class LinkedList {
  constructor (
    public head: LinkedListNode = null,
    public tail: LinkedListNode = null,
    public length: number = 0
  ) {
  }

  /**
   * 获取任意位置的元素
   */
  public at (position: number): (LinkedListNode | null) {
    if (position >= 0 && position < this.length) {
      let currentNode = this.head
      let index = 0
      while (index !== position) {
        currentNode = currentNode.next
        index += 1
      }
      return currentNode
    } else {
      return null
    }
  }

  /**
   * 从后面向链表中添加节点
   */
  public append (ele: any): LinkedList {

    // 从后面添加, 节点的next必然为null, 因为它本身就是最后一项
    let node: LinkedListNode = new LinkedListNode(ele, null)

    if (this.head === null || this.tail === null) {
      // 链表长度为0的情况下
      this.head = node
      this.tail = node
    } else {
      // 链表长度不为0的情况下, 新添加的节点将成为tail
      this.tail.next = node
      this.tail = node
    }

    this.length += 1

    return this
  }

  /**
   * 从前面向链表中添加节点
   */
  public prepend (ele: any): LinkedList {
    // 新添加的节点的next必然指向当前链表的head
    let node: LinkedListNode = new LinkedListNode(ele, this.head)
    this.head = node
    if (this.tail === null ) {
      // 链表长度为0的情况下
      this.tail = node
    }
    this.length += 1
    return this
  }

  /**
   * 任意位置插入
   */
  public insert (position: number, ele: any): (LinkedList | boolean) {
    if (position >= 0 && position <= this.length) {
      let node: LinkedListNode = null
      // 从头插入的情况下
      if (position === 0) {
        return this.prepend(ele)
        // node = new LinkedListNode(ele, this.head)
        // this.head = node
        // if (this.tail === null) {
        //   this.tail = node
        // }
        // this.length += 1
        // return this
      // 从尾插入的情况下
      } else if (position === this.length) {
        return this.append(ele)
        // node = new LinkedListNode(ele, null)
        // if (this.head === null || this.tail === null) {
        //   this.head = node
        //   this.tail = node
        // } else {
        //   this.tail.next = node
        //   this.tail = node
        // }
        // this.length += 1
        // return this
      } else {
        let index = 1
        let currentNode = this.head.next
        let prevCurrentNode = this.head
        // 遍历链表
        while (currentNode) {
          if (index === position) {
            node = new LinkedListNode(ele, currentNode)
            prevCurrentNode.next = node
            this.length += 1
            return this
          } else {
            currentNode = currentNode.next
          }
        }
      }
    } else {
      return false
    }
  }

  public indexOf () {
  }

  public find () {
  }

  public size () {
  }

  public remove () {
  }

  /**
   * 移除链表中任意位置的元素
   */
  public removeAt (position: number): (LinkedListNode | null) {
    // 越界判断
    if (position >= 0 && position < this.length) {
      if (position === 0) {
        // 删除第一个的情况下
        let removeNode = this.head
        this.head = this.head.next
        this.length -= 1
        return removeNode
      } else if (position === this.length - 1) {
        // 删除是最后的一个情况
        let removeNode = this.tail
        let currentNode = this.head.next
        let prevNode = this.head
        let index = 1
        // 找到最后一个的前一个，修改它的next的指向
        while (index !== position) {
          prevNode = currentNode
          currentNode = currentNode.next
          index += 1
        }
        prevNode.next = null
        this.tail = prevNode
        this.length -= 1
        return removeNode
      } else {
        // 删除不是第一个情况下, 也不是第一个的情况
        // 需要删除的节点
        let removeNode = this.head.next
        // 需要删除的节点的前一个节点
        let prevRemoveNode = this.head
        let index = 1
        while (index !== position) {
          prevRemoveNode = removeNode
          removeNode = removeNode.next
          index += 1
        }
        // 绕过需要删除的节点, 重新链接链表
        prevRemoveNode.next = prevRemoveNode.next.next
        this.length -= 1
        return removeNode
      }
    } else {
      return null
    }
  }

  public removeHead () {
  }

  public removeTail () {
  }

  public fromArray () {
  }

  public toArray () {
  }
}

export default LinkedList
