/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 使用双指针解决 + hash
  const len = s.length
  let hashMap = new Map()
  let start = 0
  let end = 0
  let maxLen = 0

  while (end < len) {
    if (!hashMap.has(s[end])) {
      hashMap.set(s[end], 1)
      maxLen = Math.max(maxLen, [...hashMap.keys()].length)
      end += 1
    } else {
      hashMap.delete(s[start])
      start += 1
    }
  }

  return maxLen
};