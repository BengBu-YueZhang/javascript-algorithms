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

var Trie = function() {
  // 初始化根节点
  this.root = new TrieNode('')
};

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

var replaceWords = function(dict, sentence) {
  let sentences = sentence.split(' ')
  let result = []
  
  for (let i = 0; i < sentences.length; i++) {
      let trie = new Trie()
      trie.insert(sentences[i])
      let min = sentences[i]
      for (let j = 0; j < dict.length; j++) {
          if (trie.startsWith(dict[j])) {
              min = min.length < dict[j].length ? min : dict[j]
          }
      }
      result.push(min)
  }
  
  return result.join(' ')
};