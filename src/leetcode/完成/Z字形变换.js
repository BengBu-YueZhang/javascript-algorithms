/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let result = []
  let matrix = []
  let rowCounter = 0
  let prevRowCounter = 0
  let colCounter = 0
  let prevColCounter = 0
  const other = numRows - 2
  for (let i = 0; i < numRows; i++) {
      matrix.push([])
  }
  for (let i = 0; i < s.length; i++) {
      matrix[rowCounter][colCounter] = s[i]
      // console.log(rowCounter, colCounter)
      if (prevRowCounter <= rowCounter ) {
          prevRowCounter = rowCounter
          if (rowCounter >= numRows - 1) {
              rowCounter -= 1
              colCounter += 1
          } else {
              rowCounter += 1
          }
      } else {
          prevRowCounter = rowCounter
          if (rowCounter <= 0) {
              rowCounter += 1 
          } else {
              rowCounter -= 1
              colCounter += 1
          }
      }
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] !== undefined) {
             result.push(matrix[i][j]) 
          }
      }
  }
  return result.join('')
};

// 2 - 0
// 3 - 1
// 4 - 2
// 5 - 3
// 6 - 4

// a     a
// a    b
// a   b
// a  b
// a b
// a



