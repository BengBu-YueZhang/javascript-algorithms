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
var inorderTraversal = function (root) {
  let result = []
  const traversing = (node) => {
    if (!node) return
    if (node.left) {
      traversing(node.left)
    }
    if (node.val) {
      result.push(node.val)
    }
    if (node.right) {
      traversing(node.right)
    }
  }
  traversing(root)
  return result
};