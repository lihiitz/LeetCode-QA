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
    if (!root){
        return
    }
    if (root.left){
        inOrderTraversal(root.left, arr)
    }
    arr.push(root.val)
    if (root.right){
        inOrderTraversal(root.right, arr)
    }
}

const isSymmetric = function(root) {
    let nums = []
    inOrderTraversal(root, nums)

    for (let first = 0, last = nums.length - 1; first <= last; first++, last--){
        if (nums[first] !== nums[last]){
            return false
        }
    }
    return true
}

module.exports = isSymmetric