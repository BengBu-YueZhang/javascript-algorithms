/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.LRU = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.LRU.has(key)) {
        var value = this.LRU.get(key);
        this.LRU.delete(key);
        this.LRU.set(key, value);
        return value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.LRU.has(key)) {
        if (this.LRU.size < this.capacity) {
            this.LRU.set(key, value);
        } else {
            const overdueKey = [...this.LRU.keys()][0]
            this.LRU.delete(overdueKey);
            this.LRU.set(key, value);
        }
    } else {
        this.LRU.delete(key);
        this.LRU.set(key, value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */