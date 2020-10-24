
//  @param {TreeNode} root
//  @param {number} sum
//  @return {boolean}

// const hasPathSum = function(root, sum) {
//     if (root.left === null && root.right === null){
//         if (root.val === sum){
//             return true
//         }
//         return false
//     }
//     let left = false 
//     let right = false
//     if (root.left){
//         left = hasPathSum(root.left, sum - root.val)
//     }
//     if (root.right){
//         right = hasPathSum(root.right, sum - root.val)
//     }
//     return (left || right)
// }

const hasPathSum = function(root, sum) {
    if (root.left === null && root.right === null){
        if (root.val === sum){
            return true
        }
        return false
    }

    if (root.left){
        return hasPathSum(root.left, sum - root.val)
    }
    if (root.right){
        return hasPathSum(root.right, sum - root.val)
    }
}

module.exports = hasPathSum