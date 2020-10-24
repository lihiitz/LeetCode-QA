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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
    let res = []
    if (!(root.left) && !(root.right)){
        if (root.val === sum){
            res.push([sum])
        }
        return res
    }
    if (root.left){
        res.push(pathSum(root.left, sum - root.val))
    }
    if (root.right){
        res.push(pathSum(root.right, sum - root.val))
    }
}

module.exports = pathSum