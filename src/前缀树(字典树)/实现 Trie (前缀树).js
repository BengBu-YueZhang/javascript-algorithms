var TrieNode = function (val = null) {
  this.val = val
  this.children = {}
  this.isWord = false
}

TrieNode.prototype.add = function (val) {
  let child = new TrieNode(val)
  this.children[val] = child
  return this.children[val]
}

TrieNode.prototype.has = function (val) {
  return this.children[val] ? true : false
}

/**
* Initialize your data structure here.
*/
var Trie = function() {
  // 初始化根节点
  this.root = new TrieNode('')
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let current = this.root
  let words = word.split('')
  let i = 0
  // 替换最后一个节点
  while (i < words.length) {
      if (!current.has(words[i])) {
         // 如果不存在该子节点
         current = current.add(words[i])
      } else {
         // 如果存在该子节点
         current = current.children[words[i]]
      }
      i += 1
  }
  current.isWord = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let current = this.root
  let words = word.split('')
  let i = 0
  let result = null
  while (i < words.length) {
      if (current.has(words[i])) {
          current = current.children[words[i]]
          i += 1 
      } else {
          return false
      }
  }
  return current.isWord

};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let current = this.root
  let prefixs = prefix.split('')
  let i = 0
  while (i < prefixs.length) {
      if (current.has(prefixs[i])) {
          current = current.children[prefixs[i]]
          i += 1 
      } else {
          return false
      }
  }
  return true
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = Object.create(Trie).createNew()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/