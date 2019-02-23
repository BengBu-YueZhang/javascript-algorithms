/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let hashMap = new Map()
  let start = 0
  let end = 0
  let count = t.length
  let min = ''
  
  t.split('').forEach((item) => {
      if (!hashMap.has(item)) {
          hashMap.set(item, 1)
      } else {
          hashMap.set(item, hashMap.get(item) + 1)
      }
  })
  
  while (end < s.length) {
      
      if (hashMap.has(s[end]) && hashMap.get(s[end]) > 0) {
          count -= 1
      }
      
      if (!hashMap.has(s[end])) {
          hashMap.set(s[end], -1)
      } else {
          hashMap.set(s[end], hashMap.get(s[end]) - 1)
      }
      
      if (count === 0) {
          while (hashMap.get(s[start]) != 0) {
              hashMap.set(s[start], hashMap.get(s[start]) + 1)
              start += 1 
          }
          
          if (!min) {
              min = s.slice(start, end + 1)
          } else {
              min = s.slice(start, end + 1).length < min.length ? s.slice(start, end + 1) : min
          }
          
          hashMap.set(s[start], hashMap.get(s[start]) + 1)
          start += 1
          count += 1
      }
      end += 1
  }
  
  return min
};
