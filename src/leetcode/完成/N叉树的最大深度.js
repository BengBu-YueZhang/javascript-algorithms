/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let reuslt = []

    const iteration = (root, level) => {
        if (!root) return

        if (!reuslt[level]) {
            reuslt[level] = []
        }

        reuslt[level].push(root.val)

        for (let i = 0; i < root.children.length; i++) {
            iteration(root.children[i], level + 1)
        }

    }

    iteration(root, 0)

    return reuslt.length
};