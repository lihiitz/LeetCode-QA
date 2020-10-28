/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const inOrderTraversal = function(root, arr){
    let res = true
    if (!root){
        return
    }
    if (root.left && root.right && (root.left.val !== root.right.val)){
        res = false
    }
    if (root.left){
        inOrderTraversal(root.left, arr)
    }
    else if (root.right){
        arr.push(null)
    }
    arr.push(root.val)
    if (root.right){
        inOrderTraversal(root.right, arr)
    }else if (root.left){
        arr.push(null)
    }
    return res
}

const isSymmetric = function(root) {
    let nums = []
    if (inOrderTraversal(root, nums) === false){
        return false
    }
    ////////////////////
    // return nums
    /////////////////////////
    if ((nums.length % 2) === 0){
        return false
    }
    for (let first = 0, last = nums.length - 1; first <= last; first++, last--){
        if (nums[first] !== nums[last]){
            return false
        }
    }
    return true
}

// best solution!!!! (not mine)
const isSymmetric2 = function(root) {
    if (!root){
        return true
    }
    return isMirror(root.left, root.right)
}

const isMirror = function(root1, root2){
    if (!root1 && !root2){
        return true
    }
    if (!root1){
        return false
    }
    if (!root2){
        return false
    }
    if (root1.val !== root2.val){
        return false
    }
    return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
}
module.exports = isSymmetric2