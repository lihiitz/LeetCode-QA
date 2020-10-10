// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
const combinationSum = function(candidates, target) {
    let len = candidates.length
    candidates.sort(function(a, b) {return a - b})
    
    //candidates = [5, 7, ...] target = 2
    if (candidates[0] > target){
        return []
    }
    //candidates = [1, 2, 100] target = 200
    let sum = candidates.reduce(function(a, b) {return a + b}, 0)
    if (sum < target){
        return []
    }
    let res = []
    for (const num of candidates){
        if (target % num === 0){
            res.push(Array(target / num).fill(num))
        }
    }
    
}

module.exports = combinationSum