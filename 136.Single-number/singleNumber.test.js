// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:

// Input: nums = [1]
// Output: 1

const singleNumber = require('./singleNumber')

console.log(`
    test 1: ${singleNumber([2,2,1]) === 1},
    test 2: ${singleNumber([4,1,2,1,2]) === 4},
    test 3: ${singleNumber([1]) === 1}
`)