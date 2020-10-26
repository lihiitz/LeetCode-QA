// input: [1,2,2,3,4,4,3] 
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// output: true

// input: [1,2,2,null,3,null,3] 
//     1
//    / \
//   2   2
//    \   \
//    3    3
// output: false




function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


let leftThree = new TreeNode(3, null, null)
let rightFour = new TreeNode(4, null, null)
let rightThree = new TreeNode(3, null, null)
let leftFour = new TreeNode(4, null, null)
let leftTwo = new TreeNode(2, leftThree, rightFour)
let rightTwo = new TreeNode(2, leftFour, rightThree)
let root = new TreeNode(1, leftTwo, rightTwo)

let a = new TreeNode(3, null, null)
let b = new TreeNode(3, null, null)
let c = new TreeNode(2, null, a)
let d = new TreeNode(2, null, b)
let e = new TreeNode(1, c, d)

const isSymmetric = require('./symmetricTree')

console.log(`test 1: ${isSymmetric(root) === true}`)
console.log(`test 2: ${isSymmetric(e) === false}`)


