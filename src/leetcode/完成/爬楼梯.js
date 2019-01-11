/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 思路1
  // if (n === 0) return 0
  // if (n === 1) return 1
  // if (n === 2) return 2
  // return climbStairs(n - 1) + climbStairs(n - 2)

  // 思路2
  if (n <= 3) return n
  let a = 2
  let b = 3
  let sum 
  for (let i = 0; i < n - 3; i++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
};

