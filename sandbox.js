// These 2 arrays will make a sentence, what would it be?
let arr1 = ['A', 'B', 'D', 'E', 'G', 'H', 'I', 'R', 'Q', 'O', 'N', 'K', 'S', 'T', 'U', 'V', 'Y']
let arr2 = [32, 26, 37, 28, 27, 34, 31, 30, 41, 37, 25, 37, 33, 24, 27, 35, 34, 30, 36, 41, 24, 31, 26, 41, 33, 37, 40, 38, 41, 34, 30, 41, 40, 30, 24, 41, 39, 31, 31, 29, 28]

arr1.reverse()

let newArr = [...arr2]
newArr.sort()

let letterArray = arr2.map(n => arr1[n-newArr[0]])

let result = letterArray.map(letter => letter ? letter : ' ').join('')

console.log(result);

// short way
// arr1.reverse()
// let result2 = arr2.map(n => arr1[n-24] ? arr1[n-24] : ' ' ).join('') // 1 line code

// console.log(result2);