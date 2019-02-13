/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     
  let binaryTree = {}
   
  const iteration = (preorder, inorder, tree) => {
       
      if (!preorder.length) {
          binaryTree = null
          return
      }
       
      tree.val = null
      tree.left = {
          val: null,
          left: null,
          right: null
      }
      tree.right = {
          val: null,
          left: null,
          right: null
      }

     // 前序遍历第一个节点为当前树的根节点
     let rootVal = preorder.splice(0, 1)[0]
     // 中序遍历根节点的索引
     let rootIndex = inorder.indexOf(rootVal)
     // 中序遍历的左子树
     let inorderLeftTree = inorder.slice(0, rootIndex)
     // 中序遍历的右子树
     let inorderRightTree = inorder.slice(rootIndex + 1)
     // 前序遍历的左子树
     let preorderLeftTree = preorder.slice(0, inorderLeftTree.length)
     // 前序遍历的右子树
     let preorderRightTree = preorder.slice(inorderLeftTree.length)

       
     tree.val = rootVal
      
     if (preorderLeftTree.length === 1 || inorderLeftTree.length === 1) {
         tree.left.val = preorderLeftTree[0]
     } else if (preorderLeftTree.length > 1 || inorderLeftTree.length > 1) {
         iteration(preorderLeftTree, inorderLeftTree, tree.left)
     } else {
          tree.left = null
     }
       
     if (preorderRightTree.length === 1 || inorderRightTree.length === 1) {
         tree.right.val = preorderRightTree[0]
     } else if (preorderRightTree.length > 1 || inorderRightTree.length > 1) {
         iteration(preorderRightTree, inorderRightTree, tree.right)
     } else {
      tree.right = null
     }
  }
   
  iteration(preorder, inorder, binaryTree)
   
  return binaryTree
};
