/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = []
  const traversing = (node) => {
    if (!node) return []
    result.push(node.val)
    if (node.left) {
      result.concat(traversing(node.left))
    }
    if (node.right) {
      result.concat(traversing(node.right))
    }
  }
  traversing(root)
  return result
};