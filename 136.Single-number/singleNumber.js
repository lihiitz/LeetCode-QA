// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const singleNumber = function(nums) {
    // a ^ 0 = a
    // a ^ a = 0
    // a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

    //all numbers that appears twice will become 0 and the only one number that appears once will remain
    let res = 0
    for (let num of nums){
        res ^= num
    }
    return res
}

module.exports = singleNumber