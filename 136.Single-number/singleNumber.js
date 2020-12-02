// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let found = false
        for (let j = 0; j < nums.length; j++){
            if ((i !== j) && (nums[i] === nums[j])){
                found = true
                break
            }
        }
        if (!found){
            return nums[i]
        }
    }
}

module.exports = singleNumber