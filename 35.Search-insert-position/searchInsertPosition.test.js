// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// Input: [1,3,5,6], 7
// Output: 4

// Input: [1,3,5,6], 0
// Output: 0

const searchInsertPosition = require('./searchInsertPosition')

const result1 = searchInsertPosition([1,3,5,6], 5)
const result2 = searchInsertPosition([1,3,5,6], 2)
const result3 = searchInsertPosition([1,3,5,6], 7)
const result4 = searchInsertPosition([1,3,5,6], 0)

console.log(`
    test 1: ${result1 === 2}
    test 2: ${result2 === 1}
    test 3: ${result3 === 4}
    test 4: ${result4 === 0}
`)