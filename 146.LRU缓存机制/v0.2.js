var LinkedList = require('./LinkedList')

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hash = new Map()
    this.lru = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash.has(key)) {
        const node = this.hash.get(key)
        const value = node.val.value
        this.lru.delete(node)
        this.hash.delete(key)
        let cache = {
            key,
            value
        }
        this.lru.addAtTail(cache)
        // 待优化，可以直接拿到链表的尾巴是最好的
        let newNode = this.lru.get(this.lru.length - 1)
        this.hash.set(key, newNode)
        return value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const put = () => {
        let cache = {
            key,
            value
        }
        this.lru.addAtTail(cache)
        // 待优化，可以直接拿到链表的尾巴是最好的
        let node = this.lru.get(this.lru.length - 1)
        this.hash.set(key, node)
    }
    if (!this.hash.has(key)) {
        if (this.hash.size < this.capacity) {
            put()
        } else {
            // 删除过期的缓存
            console.log('那里')
            const overdueKey = this.lru.get(0).val.key
            this.lru.deleteAtIndex(0)
            this.hash.delete(overdueKey)
            // 添加新的缓存
            put()
        }
    } else {
        // 获取之前的缓存
        const node = this.hash.get(key)
        // 删除之前缓存在链表中的位置
        this.lru.delete(node)
        this.hash.delete(key)
        put()
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
