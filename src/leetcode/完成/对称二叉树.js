/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // BFS遍历
  let result = []
  const traversing = (node, level) => { 
      
    if (!result[level]) result[level] = []
      
    if (!node) {
      result[level].push('null')
      return
    } else {
      result[level].push(node.val)
    }
      
    if (node.left) {
      traversing(node.left, level + 1)
    } else {
      traversing(null, level + 1)  
    }
      
    if (node.right) {
      traversing(node.right, level + 1)
    } else {
      traversing(null, level + 1) 
    }
      
  }
  
  traversing(root, 0)
  
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i].join('') !== result[i].reverse().join('')) {
      return false
    }
  }
  return true
};