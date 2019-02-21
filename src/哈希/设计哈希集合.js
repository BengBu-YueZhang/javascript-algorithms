/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hashSet = new Array(1000000)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
   this.hashSet[key] = key 
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.hashSet[key] = undefined 
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (this.hashSet[key] === undefined) {
        return false
    }
    return true
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */