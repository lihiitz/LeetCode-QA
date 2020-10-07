
//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}

//TC = LOG(N)
const searchRange = function(nums, target) {
    let len = nums.length
    let l = 0
    let r = len - 1
    
    if (nums[0] === target && nums[len - 1] === target){//case: 8,8,8,8
        return [0, len -1]
    }
    if (nums[0] === target){//case: 8,8,9,10
        let right = findRightPos(nums, target)
        return [0, right]
    }
    if (nums[len - 1] === target){//case: 6,7,8,8
        let left = findLeftPos(nums, target)
        return [left, len - 1]
    }
}

const findRightPos = function (nums, target){
    let l = 0
    let r = nums.length - 1
    
    while(l <= r){
        let mid = Math.trunc((l + r) / 2)
        
        if (nums[mid] < target){
            l = mid + 1
        }else if (nums[mid] > target){
            r = mid - 1
        }else{
            if (nums[mid + 1] === target){
                l = mid + 1
            }else{
                return mid
            }
        }
    }
    return -1
}

const findLeftPos = function (nums, target){
    let l = 0
    let r = nums.length - 1
    
    while(l <= r){
        let mid = Math.trunc((l + r) / 2)
        
        if (nums[mid] < target){
            l = mid + 1
        }else if (nums[mid] > target){
            r = mid - 1
        }else{
            if (nums[mid - 1] === target){
                r = mid - 1
            }else{
                return mid
            }
        }
    }
    return -1
}

module.exports = searchRange