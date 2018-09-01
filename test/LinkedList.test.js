const LinkedList = require('../src/LinkedList/LinkedList').default
const expect = require('chai').expect

describe('链表', function () {
  it('get', function () {
    let linkedList = new LinkedList()
    linkedList.addAtTail(1)
    linkedList.addAtTail(2)
    linkedList.addAtHead(0)
    expect(linkedList.length).to.equals(3)
    expect(linkedList.get(0)).to.equals(0)
    expect(linkedList.get(1)).to.equals(1)
    expect(linkedList.get(2)).to.equals(2)
  })

  it('addAtIndex', function () {
    let linkedList = new LinkedList()
    linkedList.addAtIndex(0, 0)
    linkedList.addAtIndex(1, 1)
    linkedList.addAtIndex(2, 2)
    expect(linkedList.length).to.equals(3)
    expect(linkedList.get(0)).to.equals(0)
    expect(linkedList.get(1)).to.equals(1)
    expect(linkedList.get(2)).to.equals(2)
    linkedList.addAtIndex(1, 666)
    expect(linkedList.get(1)).to.equals(666)
  })

  it('deleteAtIndex', function () {
    let linkedList = new LinkedList()
    linkedList.addAtTail(0)
    linkedList.addAtTail(1)
    linkedList.addAtTail(2)
    linkedList.deleteAtIndex(0)
    expect(linkedList.length).to.equals(2)
    expect(linkedList.get(0)).to.equals(1)
    expect(linkedList.get(1)).to.equals(2)
    linkedList.deleteAtIndex(1)
    expect(linkedList.length).to.equals(1)
    expect(linkedList.get(0)).to.equals(1)
  })

  it('leetcode, error, 01', function () {
    let linkedList = new LinkedList()
    linkedList.addAtHead(0)
    linkedList.addAtIndex(1, 9)
    linkedList.addAtIndex(1, 5)
    linkedList.addAtTail(7)
    linkedList.addAtHead(1)
    linkedList.addAtIndex(5, 8)
    linkedList.addAtIndex(5, 2)
    linkedList.addAtIndex(3, 0)
    linkedList.addAtTail(1)
    linkedList.addAtTail(0)
    linkedList.deleteAtIndex(6)
  })

  it('leetcode, error, 02', function () {
    let linkedList = new LinkedList()
    linkedList.addAtHead(5)
    linkedList.addAtHead(6)
    expect(linkedList.get(2)).to.equals(-1)
    expect(linkedList.get(2)).to.equals(-1)
    linkedList.addAtHead(7)
    linkedList.addAtIndex(1, 3)
    expect(linkedList.get(2)).to.equals(6)
    linkedList.addAtIndex(2, 3)
    expect(linkedList.get(3)).to.equals(6)
    linkedList.addAtHead(6)
    linkedList.addAtIndex(4, 2)
  })

  it('hasCycle', function () {
  })

})