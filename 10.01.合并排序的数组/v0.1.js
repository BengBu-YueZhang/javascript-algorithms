/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 * A = [1,2,3,0,0,0], m = 3
 * B = [2,5,6],       n = 3
 * [1,2,2,3,5,6]
 * 
 * 我觉得完全可以没有保留后面的0，因为js本身就是可变数组
 * 我觉得本题主要考察的是，在不开辟新内存空间的情况下，进行归并排序
 */
var merge = function(A, m, B, n) {
    // 首先删除A数组后面碍事的0
    A.splice(m, A.length)

    // 一些特殊情况的处理
    // 如果B的开头就大于A的末尾，直接把B全部添加到A的末尾即可
    // 如果B的长度为0，也是如此
    if (B[0] > A[A.length - 1] || B.length === 0 || A.length === 0) {
        for (let i = 0; i < B.length; i++) {
            A.push(B[i])
        }
    } else {
        let index = 0
        let head = B.shift()
        while (B.length >= 0 && index < A.length) {
            if (head < A[index]) {
                A.splice(index, 0, head)
                head = B.shift()
            }
            index += 1
        }
        if (typeof head === 'number') {
            A.push(head)
        }
        if (B.length) {
            for (let i = 0; i < B.length; i++) {
                A.push(B[i])
            }
        }
    }
};