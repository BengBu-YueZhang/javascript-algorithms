/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null

  let result = null

  const seatch = (node) => {
    if (node.val === val) {
      return result = node
    } else if (val > node.val && node.right) {
      seatch(node.right)
    } else if (val < node.val && node.left) {
      seatch(node.left)
    }
  }

  seatch(root)

  return result
};