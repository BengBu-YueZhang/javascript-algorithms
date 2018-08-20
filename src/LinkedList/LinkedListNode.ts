interface LinkedListItemInterface {
  value: any;
  next: any;
}

/**
 * 链表节点类
 */
class LinkedListItem implements LinkedListItemInterface {
  constructor (
    public value: any,
    public next: any = null
  ) {
  }
}

export default LinkedListItem
