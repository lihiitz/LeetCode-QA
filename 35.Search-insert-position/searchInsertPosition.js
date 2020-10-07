// @param {number[]} nums
// @param {number} target
// @return {number}

//TC = LOG(N)
const searchInsert = function(nums, target) {
    let len = nums.length
    let l = 0
    let r = len - 1
    
    if (nums[0] > target){
        return 0
    }
    
    if (nums[len - 1] < target){
        return len
    }
    
    while(l <= r){
        let mid = Math.trunc((l + r) / 2)
        
        if (nums[mid] === target){
            return mid
        }
        
        if (nums[mid] > target){
            r = mid - 1
            if (nums[r] < target){
                return mid
            }
            
        }else if (nums[mid] < target){
            l = mid + 1
            if (nums[l] > target){
                return l
            }
        }
    }
}

module.exports = searchInsert