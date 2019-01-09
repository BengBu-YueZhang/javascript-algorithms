/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
  let result = []
  
  if (nums.length <= 1) result = [nums]

  function exchange (title, arr) {
    for (let i = 0; i < arr.length; i++) {
      let cloneArr = [...arr]
      let newFirst = [...title, ...cloneArr.splice(i, 1)]
      if (cloneArr && cloneArr.length) {
        exchange(newFirst, cloneArr)
      } else {
        result.push(newFirst)
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let cloneArr = [...nums]
    let first = cloneArr.splice(i, 1)
    exchange(first, cloneArr)
  }
  
  return result
};