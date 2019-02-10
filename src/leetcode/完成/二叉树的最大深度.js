/**
 * BFS遍历即可
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = []
  const traversing = (node, level) => {
    if (!node) return
    if (!result[level]) result[level] = []
    result[level].push(node.val)
    if (node.left) {
      traversing(node.left, level + 1)
    }
    if (node.right) {
      traversing(node.right, level + 1)
    }
  }
  traversing(root, 0)
  return result.length
};