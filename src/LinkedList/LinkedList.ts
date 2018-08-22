
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

  public addAtHead (val: number): void {
    let newNode: LinkedListNode = new LinkedListNode(val, this.head)
    this.head = newNode
    this.length += 1
  }

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
