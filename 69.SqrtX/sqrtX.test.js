
// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
const mySqrt = require('./sqrtX')

console.log(`
    test 1: ${mySqrt(4) === 2},
    test 2: ${mySqrt(8) === 2},
    test 3: ${mySqrt(0) === 0},
    test 4: ${mySqrt(1) === 1},
    test 5: ${mySqrt(2) === 1}
`)
