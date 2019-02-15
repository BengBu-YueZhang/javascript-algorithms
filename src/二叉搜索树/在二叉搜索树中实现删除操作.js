/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {


  // 根节点为空的情况
  if (!root) {
    return null
  }

  if (!root.left && !root.right && root.val === key) {
    root = null
    return root
  }

  if (!root.left && root.right && root.val === key) {
    root = root.right
    return root
  }

  if (root.left && !root.right && root.val === key) {
    root = root.left
    return root
  }

  // 根节点替换的情况

  // 寻找当前树的最小节点
  const findMin = (root) => {
    let min = root
    while (min.left) {
      min = min.left
    }
    return min
  }

  let parentNode = null

  // 找到最近的父级
  const searchParent = (node, searchValue) => {
    console.log('???')
    let current = node
    let breaker = false

    while (!breaker) {
      console.log('查找父亲')
      if (
        (current.left && searchValue === current.left.val) ||
        (current.right && searchValue === current.right.val)
      ) {
        breaker = true
      } else if (searchValue < current.val) {
        current = current.left
      } else if (searchValue > current.val) {
        current = current.right
      } else {
        current = null
      }

      if (!current) break
    }

    parentNode = current
  }

  const remove = (node, deleteValue) => {
    if (node.val === deleteValue) {
      console.log('1')
      // node为要删除的节点
      if (!node.left && !node.right) {
        console.log('3')
        // 如果没有任何子节点
        searchParent(root, node.val)
        if (parentNode.left && parentNode.left.val === deleteValue) {
          parentNode.left = null
        } else {
          parentNode.right = null
        }
      } else if (!node.left && node.right) {
        console.log('4')
        // 如果只有一个子节点
        searchParent(root, node.val)
        if (parentNode.left && parentNode.left.val === deleteValue) {
          parentNode.left = node.right
        } else {
          parentNode.right = node.right
        }
      } else if (node.left && !node.right) {
        console.log('5')
        // 如果只有一个子节点
        searchParent(root, node.val)
        if (parentNode.left && parentNode.left.val === deleteValue) {
          parentNode.left = node.left
        } else {
          parentNode.right = node.left
        }
      } else {
        console.log('6')
        // 如果有两个子节点
        // 找到右子树中最小的节点
        let minNode = findMin(node.right)
        console.log('7')
        let minNodeValue = minNode.val
        console.log('8')
        remove(root, minNodeValue)
        console.log('9')
        node.val = minNodeValue
        console.log('10')
      }
    } else if (deleteValue > node.val && node.right) {
      console.log('2')
      remove(node.right, deleteValue)
    } else if (deleteValue < node.val && node.left) {
      console.log('3')
      remove(node.left, deleteValue)
    }
  }

  remove(root, key)

  return root
};