/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true
  if (s.length === 1) return false
  let queue = []
  for (let i = 0; i < s.length; i++) {
      if (!queue.length) {
          queue.push(s[i])
      } else {
          let tail = queue[queue.length - 1] 
          if (s[i] === '}' && tail === '{') {
              queue.pop()
              continue
          } else if (s[i] === ']' && tail === '[') {
              queue.pop()
              continue
          } else if (s[i] === ')' && tail === '(') {
              queue.pop()
              continue
          } else {
              queue.push(s[i])
          }
      }       
  }
  if (!queue.length) {
      return true
  } else {
      return false
  }
};

console.log(
  isValid('()')
)