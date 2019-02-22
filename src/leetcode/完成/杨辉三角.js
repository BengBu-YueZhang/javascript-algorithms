/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        let line = i + 1
        let start = 0
        let end = 1
        result.push([])
        for (let j = 0; j < line; j++) {
           if (j === 0) {
               result[i].push(1)
               continue
           }
           if (j === line - 1) {
               result[i].push(1) 
               continue
           }
           result[i].push(result[i - 1][start] + result[i - 1][end])
           start += 1
            end += 1
        }
    }
    return result
};