// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Input: candidates = [2], target = 1
// Output: []

// Input: candidates = [1], target = 1
// Output: [[1]]

// Input: candidates = [1], target = 2
// Output: [[1,1]]

const isCombinationSum = require('./combinationSum')
console.log(`
    test 1: ${isCombinationSum([2,3], 7) === true}
    test 2: ${isCombinationSum([2,3,5], 8) === true}
    test 3: ${isCombinationSum([2], 1) === false}
    test 4: ${isCombinationSum([1], 1) === true}
    test 5: ${isCombinationSum([1], 2) === true}
`)
