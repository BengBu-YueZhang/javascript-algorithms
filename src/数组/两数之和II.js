/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 暴力查找
  // for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i + 1; j < numbers.length; j++) {
  //         if (target === numbers[i] + numbers[j]) {
  //             return [i + 1, j + 1]
  //         }
  //     }
  // }
  
  // 二分查找
  // const len = numbers.length
  
  // function binarySearch (tar, start, end) {
  //   // 递归二分查找，内存溢出
  //   // let middle = Math.floor((start+end) / 2)
  //   // if (numbers[middle] === tar) {
  //   //     return middle
  //   // } else if (numbers[middle] < tar && middle > start) {
  //   //     return binarySearch(tar, middle + 1, end)
  //   // } else if (numbers[middle] > tar && middle < len - 1) {
  //   //     return binarySearch(tar, start, middle - 1)
  //   // } else {
  //   //   return -1
  //   // }
  //   var currentIndex;
  //   var currentElement;
  //   while (start <= end) {
  //     currentIndex = (start + end) / 2 | 0;
  //     currentElement = numbers[currentIndex];
  //     if (currentElement < tar) {
  //       start = currentIndex + 1;
  //     } else if (currentElement > tar) {
  //       end = currentIndex - 1;
  //     } else {
  //       return currentIndex;
  //     }
  //   }
  //   return -1;
  // }
  
  // for (let i = 0; i < len; i++) {
  //     let index1 = numbers[i]
  //     let index2 = target - index1
  //     let index2Index = binarySearch(index2, i + 1, len - 1)
  //     if (index2Index !== -1) {
  //         return [i + 1, index2Index + 1] 
  //     } else {
  //         continue
  //     }
  // }
  
  // 对撞指针法
  // 复杂度最小, o(n)的复杂度
  const len = numbers.length
    let start = 0
    let end = len - 1
    while (start < end) {
        if (numbers[start] + numbers[end] === target) {
            return [start + 1, end + 1]
        } else if (numbers[start] + numbers[end] < target) {
            start += 1
        } else {
            end -= 1
        }
    }
    return []
};
