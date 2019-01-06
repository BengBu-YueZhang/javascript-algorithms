/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // a[ei]、e[i:]、i[ ai]、o[eu]、u[ju:]
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const len = s.length
    let arr = s.split('')
    let start = 0
    let end = len - 1
    while (start < end) {
        if (vowels.indexOf(arr[start]) > -1 && vowels.indexOf(arr[end]) > -1) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start += 1
            end -= 1
        } else if (vowels.indexOf(arr[start]) === -1 && vowels.indexOf(arr[end]) > -1) {
            start += 1
        } else if (vowels.indexOf(arr[start]) > -1 && vowels.indexOf(arr[end]) === -1) {
            end -= 1
        } else {
            start += 1
            end -= 1
        }
    }
    return arr.join('')
};