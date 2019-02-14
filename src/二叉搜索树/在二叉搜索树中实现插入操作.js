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
var insertIntoBST = function (root, val) {
  const insert = (root) => {
    if (val > root.val) {
      if (root.right) {
        insert(root.right)
      } else {
        root.right = new TreeNode(val)
      }
    } else if (val < root.val) {
      if (root.left) {
        insert(root.left)
      } else {
        root.left = new TreeNode(val)
      }
    }
  }

  insert(root)

  return root
};