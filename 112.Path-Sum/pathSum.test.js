//  5
// / \
// 4   8
// /   / \
// 11  13  4
// /  \      \
// 7    2      1
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let seven = new TreeNode(7, null, null)
let two = new TreeNode(2, null, null)
let one = new TreeNode(1, null, null)
let eleven = new TreeNode(11, seven, two)
let thirteen = new TreeNode(13, null, null)
let fourLow = new TreeNode(4, null, one)
let four = new TreeNode(4, eleven, null)
let eight = new TreeNode(8, thirteen, fourLow)
let root = new TreeNode(5, four, eight)

const hasPathSum = require('./pathSum')



console.log(`test 1: ${hasPathSum(root, 22) === true}`)