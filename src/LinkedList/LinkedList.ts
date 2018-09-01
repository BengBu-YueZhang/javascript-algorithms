
interface LinkedListNodeInterface {
  val: number;
  next: LinkedListNode;
}

interface LinkedListInterface {
  head: LinkedListNode;
  length: number;
  get(index: number): number;
  addAtHead(val: number): void;
  addAtTail(val: number): void;
  addAtIndex(index: number, val: number): void;
  deleteAtIndex(index: number): void
}

class LinkedListNode implements LinkedListNodeInterface {
  constructor (
    public val: number = null,
    public next: LinkedListNode = null
  ) {}
}

class LinkedList implements LinkedListInterface {
  constructor (
    public head: LinkedListNode = null,
    public length: number = 0) {}
  

  /**
   * 根据索引，获取链表中的节点
   * 思路: 从链表头部开始遍历整个链表, 并用计数器记数即可
   */
  public get (index: number): number {
    if (index >= 0 && index < this.length) {
      let pointer: number = 0
      let currentNode: LinkedListNode = this.head
      while (index !== pointer) {
        pointer += 1
        currentNode = currentNode.next
      }
      return currentNode.val
    } else {
      return -1
    }
  }

  /**
   * 将元素插入链表的头部
   * 思路: 将新插入的元素的next指向当前的head，再将当前的head变为新插入的元素
   */
  public addAtHead (val: number): void {
    let newNode: LinkedListNode = new LinkedListNode(val, this.head)
    this.head = newNode
    this.length += 1
  }

  /**
   * 将链表插入到元素的尾部
   * 思路: 遍历整个链表，找到next为null的节点
   */
  public addAtTail (val: number): void {
    let newNode: LinkedListNode = new LinkedListNode(val, null)
    let currentNode: LinkedListNode = this.head
    if (!this.head) {
      this.head = newNode
    } else {
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    this.length += 1
  }

  /**
   * 将元素添加到任意的节点的位置
   * 1. 如果是头部，按照插入头部的方法做一次
   * 2. 如果是中间的部位，断开要插入的位置，前一个节点和当前节点的next，将前一个节点next
   * 指向插入的节点。插入节点的next指向后一个
   */
  public addAtIndex (index: number, val: number): void {
    if (index >= 0 && index <= this.length) {
      let newNode: LinkedListNode = null
      if (index === 0) {
        this.addAtHead(val)
      } else {
        let pointer: number = 1
        let prevNode: LinkedListNode = this.head
        let currentNode: LinkedListNode = this.head.next
        while (pointer !== index && currentNode) {
          prevNode = currentNode
          currentNode = currentNode.next
          pointer += 1
        }
        // 中间插入
        newNode = new LinkedListNode(val, currentNode)
        prevNode.next = newNode
        this.length += 1
      }
    }
  }

  /**
   * 删除任意位置的节点
   * 删除头部的时候，直接将this.head指向当前的下一个皆可
   * 删除中间的部分的时候，前一个的next，指向下下个next就可以了
   */
  public deleteAtIndex (index: number): void {
    if (index >= 0 && index < this.length && this.length > 0) {
      if (index === 0) {
        this.head = this.head.next
      } else {
        let pointer: number = 1
        let prevNode: LinkedListNode = this.head
        let currentNode: LinkedListNode = this.head.next
        while (pointer !== index && currentNode.next) {
          prevNode = currentNode
          currentNode = currentNode.next
          pointer += 1
        }
        prevNode.next = prevNode.next.next
      }
      this.length -= 1
    }
  }
}

export default LinkedList
