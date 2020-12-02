// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const singleNumber = function(nums) {
    let map = {}// map = { 4: 1, 3: 2, 10: 1 ...}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]){
            map[nums[i]]++
        }else{
            map[nums[i]] = 1
        }
    }
    let keys = Object.keys(map)
    for (let i = 0; i < keys.length; i++){
        if (map[keys[i]] === 1){
            return keys[i]
        }
    }
}

module.exports = singleNumber