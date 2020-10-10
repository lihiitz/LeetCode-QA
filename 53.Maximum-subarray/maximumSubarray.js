// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const maxSubArray = function(nums) {
    let len = nums.length
    
    if (len === 1){
        return nums[0]
    }
    //find first positive num
    let start = -1
    for (let i = 0; i < len; i++){
        if (nums[i] > 0){
            start = i
            break
        }
    }
    //if all nums are negative - return max
    if (start === -1){
        return Math.max(...nums)
    }
    
    let max = nums[start]
    let temp = nums[start]
    for (let i = start + 1; i < len; i++){
        temp += nums[i]
        if (temp > max){
            max = temp
        }else if (temp <= 0){
            temp = 0
        }
    }
    return max
}

module.exports = maxSubArray