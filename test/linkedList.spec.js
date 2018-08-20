const expect = require('chai').expect
const LinkedList = require('../src/LinkedList/LinkedList.js').default

describe('链表测试单元', function () {
  it('prepend测试, 链表长度为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.prepend('head')
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('head')
  })

  it('prepend测试, 链表长度不为0的情况下', function () {
    const linkedList = new LinkedList()
    linkedList.prepend('tail')
    linkedList.prepend('head')
    expect(linkedList.head.value).to.equals('head')
    expect(linkedList.tail.value).to.equals('tail')
    expect(linkedList.head.next).to.equals(linkedList.tail)
    expect(linkedList.tail.next).to.null
  })

  it('append测试, 链表长度为0的情况下')
})