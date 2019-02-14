/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 暴力法超时
// var lowestCommonAncestor = function(root, p, q) {
    
//   // p的所有父节点
//   let pParents = [p] 
//   // q的所有父节点
//   let qParents = [q]
//   // 二叉树根节点的值
//   let rootValue = root.val
  
//   // 最近的公共节点的值
//   let recentParent = null
  
//   const search = (searchValue, result, node) => {
//       if (searchValue === rootValue) {
//           return
//       } else {
//           if (node.left) {
//               if (node.left.val === searchValue) {
//                   result.push(node)
//                   // 找到父级，再次寻找父级的父级
//                   search(node.val, result, root)
//               } else {
//                   // 再次向下寻找
//                   search(searchValue, result, node.left)
//               }
//           }
//           if (node.right) {
//               if (node.right.val === searchValue) {
//                   result.push(node)
//                   search(node.val, result, root)
//               } else {
//                   search(searchValue, result, node.right)
//               }
//           }
//       }
//   }
  
//   search(p.val, pParents, root)
  
//   search(q.val, qParents, root)
  
//   for (let i = 0; i < pParents.length; i++) {
      
//       if (qParents.findIndex((qnode) => {
//          return qnode.val === pParents[i].val
//       }) > -1) {
//           recentParent = pParents[i]
//       }
//   }

//   return recentParent
// };