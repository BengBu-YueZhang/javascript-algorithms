import LinkedListNode from './LinkedListNode'
import { isEqual } from "lodash"

interface LinkedListInterface {
  head: LinkedListNode;
  tail: LinkedListNode;
  prepend (value: any): LinkedList;
  append (value: any): LinkedList;
  delete (value: any): LinkedListNode;
  find (value: any): boolean;
  deleteTail (): LinkedListNode;
  deleteHead (): LinkedListNode;
  toArray (): Array<LinkedListNode>;
  fromArray (arr: Array<any>): LinkedList;
}

/**
 * 链表类
 */
class LinkedList implements LinkedListInterface{
  /**
   * 构造函数
   * this.head 链表的头部
   * this.tail 链表的尾部
   */
  constructor (
    public head: LinkedListNode = null,
    public tail: LinkedListNode = null
  ) {
  }

  /**
   * 从链表前部添加一个节点
   */
  prepend (value: any): LinkedList {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    // 如果tail不存在head既是head也是tail
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  /**
   * 从链表后部添加一个节点
   */
  append (value: any): LinkedList {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }
    // 如果存在尾部的节点, 当前尾部的节点的next指向newNode, 并且newNode变成新的尾部
    this.tail.next = newNode
    this.tail = newNode
    return this
  }

  /**
   * 删除一个节点
   */
  delete (value: any): LinkedListNode | null {
    let deleteNode: LinkedListNode = null
    let currentNode: LinkedListNode = null

    // 如果尾部或者头部不存在, 说明链表为空
    if (!this.head || !this.tail) {
      return deleteNode
    }
    
    // 如果删除的节点等于头部的节点
    while (this.head && isEqual(this.head.value, value)) {
      deleteNode = this.head
      // 头部变为当前头部的next
      this.head = this.head.next
    }

    currentNode = this.head

    // 从头部开始循环查找链表
    if (currentNode !== null) {
      while (currentNode.next) {
        if (isEqual(currentNode.next.value, value)) {
          // 删除的节点
          deleteNode = currentNode.next
          // 跳过删除的节点进行链接删除的节点的下一个节点
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (isEqual(this.tail.value, value)) {
      this.tail = currentNode
    }
    
    return deleteNode
  }

  /**
   * 查找一个节点
   */
  find (value: any): boolean {
    let isHave: boolean = false
    let currentNode: LinkedListNode = null
    
    if (!this.head || !this.tail) {
      return isHave
    }

    currentNode = this.head

    // 循环查找链表
    while(currentNode) {
      if (value !== undefined && isEqual(currentNode.value, value)) {
        isHave = true
      }
      currentNode = currentNode.next
    }

    return isHave
  }

  /**
   * 删除尾部
   */
  deleteTail (): LinkedListNode | null {
    let deleteNode: LinkedListNode = this.tail
    let currentNode: LinkedListNode = this.head

    if (this.tail === this.head) {
      this.tail = null
      this.head = null
      return deleteNode
    }

    while(currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deleteNode
  }

  /**
   * 删除头部
   */
  deleteHead (): LinkedListNode | null {
    if (!this.head || !this.tail) {
      return null
    }

    let deleteNode = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    
    return deleteNode
  }

  /**
   * 将链表格式化为数组
   */
  toArray (): Array<LinkedListNode> {
    let nodes = []
    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  /**
   * 将数组格式化为链表
   */
  fromArray (arr: Array<any>): LinkedList {
    arr.forEach(a => this.append(a))
    return this
  }
}

export default LinkedList
