const expect = require('chai').expect
const LinkedList = require('../src/LinkedList/other/LinkedList').default

describe('链表测试', function () {
  it('at', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.append('body')
    linkedList.append('tail')
    linkedList.append('foot')
    expect(linkedList.at(0).ele).to.equals('head')
    expect(linkedList.at(1).ele).to.equals('neck')
    expect(linkedList.at(2).ele).to.equals('body')
    expect(linkedList.at(3).ele).to.equals('tail')
    expect(linkedList.at(4).ele).to.equals('foot')
  })

  it('append, 链表长度为0', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('head')
    expect(linkedList.length).to.equal(1)
  })

  it('append, 链表长度不为0', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('neck')
    expect(linkedList.head.next).to.equal(linkedList.tail)
    expect(linkedList.tail.next).to.null
    expect(linkedList.length).to.equal(2)
  })

  it('prepend, 链表长度为0', function () {
    let linkedList = new LinkedList()
    linkedList.prepend('head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('head')
    expect(linkedList.length).to.equal(1)
  })

  it('prepend, 链表长度不为0', function () {
    let linkedList = new LinkedList()
    linkedList.prepend('neck')
    linkedList.prepend('head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('neck')
    expect(linkedList.head.next).to.equal(linkedList.tail)
    expect(linkedList.tail.next).to.null
    expect(linkedList.length).to.equal(2)
  })

  it('insert, position为开始的位置, 链表初始长度为0', function () {
    let linkedList = new LinkedList()
    linkedList.insert(0, 'head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('head')
    expect(linkedList.length).to.equal(1)
  })

  it('insert, position为开始的位置, 链表初始长度不为0', function () {
    let linkedList = new LinkedList()
    linkedList.append('neck')
    linkedList.insert(0, 'head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('neck')
    expect(linkedList.length).to.equal(2)
  })

  it('insert, position为结束的位置, 链表初始长度为0', function () {
    let linkedList = new LinkedList()
    linkedList.insert(0, 'head')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('head')
    expect(linkedList.length).to.equal(1)
  })

  it('insert, position为结束的位置, 链表初始长度不为0', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.insert(1, 'neck')
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('neck')
    expect(linkedList.length).to.equal(2)
  })

  it('insert, position为中间的位置', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.insert(1, 'penis')
    expect(linkedList.at(1).ele).to.equal('penis')
    linkedList.insert(1, 'pubes')
    expect(linkedList.at(1).ele).to.equal('pubes')
    expect(linkedList.length).to.equal(4)
  })


  it('removeAt, 删除第一个位置', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.removeAt(0)
    expect(linkedList.length).to.equals(1)
    expect(linkedList.head.ele).to.equals('neck')
    expect(linkedList.tail.ele).to.equals('neck')
  })

  it('removeAt, 删除不是第一个位置', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.append('body')
    linkedList.removeAt(1)
    expect(linkedList.length).to.equals(2)
    expect(linkedList.head.ele).to.equals('head')
    expect(linkedList.tail.ele).to.equals('body')
    expect(linkedList.head.next.ele).to.equals('body')
    linkedList.removeAt(1)
    expect(linkedList.length).to.equals(1)
    expect(linkedList.head.ele).to.equals('head')
    expect(linkedList.tail.ele).to.equals('head')
    expect(linkedList.head.next).to.null
  })

  it('removeAt, 长度为0, 删除随意的位置', function () {
    let linkedList = new LinkedList()
    linkedList.removeAt(10)
    expect(linkedList.length).to.equals(0)
    expect(linkedList.head).to.null
    expect(linkedList.tail).to.null
  })
  
  it('removeHead', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.removeHead()
    expect(linkedList.length).to.equals(1)
    expect(linkedList.head.ele).to.equal('neck')
    expect(linkedList.tail.ele).to.equal('neck')
  })

  it('removeTail', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.removeTail()
    expect(linkedList.length).to.equals(1)
    expect(linkedList.head.ele).to.equal('head')
    expect(linkedList.tail.ele).to.equal('head')
  })

  it('indexOf', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.append('body')
    linkedList.append('tail')
    linkedList.append('foot')
    expect(linkedList.indexOf('tail')).to.equals(3)
  })

  it('find', function () {
    let linkedList = new LinkedList()
    linkedList.append('head')
    linkedList.append('neck')
    linkedList.append('body')
    linkedList.append('tail')
    linkedList.append('foot')
    expect(linkedList.find('tail1')).to.false
    expect(linkedList.find('tail')).to.true
  })

  it.skip('remove', function () {
  })
})