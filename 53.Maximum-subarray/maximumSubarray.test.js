// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Input: nums = [1]
// Output: 1

// Input: nums = [0]
// Output: 0

// Input: nums = [-1]
// Output: -1

// Input: nums = [-2147483647]
// Output: -2147483647

const maxSubArray = require('./maximumSubarray')
const res1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
const res2 = maxSubArray([1])
const res3 = maxSubArray([0])
const res4 = maxSubArray([-1])
const res5 = maxSubArray([-2147483647])

console.log(`
    test 1: ${res1 === 6}
    test 2: ${res2 === 1}
    test 3: ${res3 === 0}
    test 4: ${res4 === -1}
    test 5: ${res5 === -2147483647}
`)
