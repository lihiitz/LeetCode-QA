
//input 1:
//     1
//output : true

//input 2:
//     1
//    /
//   2
//output : false

//input 3:
//     1
//    /
//   1
//output : false

//input 4:
//     1
//      \
//       2
//output : false

//input 5:
//     1
//      \
//       1
//output : false

//input 6:
//     1
//    / \
//   2   2
//output : true

//input 7:
//     1
//    / \
//   1   1
//output : true

// input 8: [1,2,2,3,4,4,3] 
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// output: true

// input 9: [1,2,2,null,3,null,3] 
//     1
//    / \
//   2   2
//    \   \
//    3    3
// output: false



//input 10:
//     1
//    / \
//   2   2
//  /   /
// 2   2
//output: false

//input 11:
//     5
//    / \
//   4   1
//    \   \ 
//     1   4
//    /   /
//   2   2
//output: false

//input 12:
//      2
//    /   \
//   3     3
//  / \   / \
// 4   5 4   5
//output: false


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let t1a = new TreeNode(1, null, null)

let t2b = new TreeNode(2, null, null)
let t2a = new TreeNode(1, t2b, null)

let t3b = new TreeNode(1, null, null)
let t3a = new TreeNode(1, t3b, null)

let t4b = new TreeNode(2, null, null)
let t4a = new TreeNode(1, null, t4b)

let t5b = new TreeNode(1, null, null)
let t5a = new TreeNode(1, null, t5b)

let t6c = new TreeNode(2, null, null)
let t6b = new TreeNode(2, null, null)
let t6a = new TreeNode(1, t6b, t6c)

let t7c = new TreeNode(1, null, null)
let t7b = new TreeNode(1, null, null)
let t7a = new TreeNode(1, t7b, t7c)

let t8g = new TreeNode(3, null, null)
let t8f = new TreeNode(4, null, null)
let t8e = new TreeNode(4, null, null)
let t8d = new TreeNode(3, null, null)
let t8c = new TreeNode(2, t8f, t8g)
let t8b = new TreeNode(2, t8d, t8e)
let t8a = new TreeNode(1, t8b, t8c)

let t9e = new TreeNode(3, null, null)
let t9d = new TreeNode(3, null, null)
let t9c = new TreeNode(2, null, t9e)
let t9b = new TreeNode(2, null, t9d)
let t9a = new TreeNode(1, t9b, t9c)

let t10e = new TreeNode(2, null, null)
let t10d = new TreeNode(2, null, null)
let t10c = new TreeNode(2, t10e, null)
let t10b = new TreeNode(2, t10d, null)
let t10a = new TreeNode(1, t10b, t10c)

let t11g = new TreeNode(2, null, null)
let t11f = new TreeNode(2, null, null)
let t11e = new TreeNode(4, t11g, null)
let t11d = new TreeNode(1, t11f, null)
let t11c = new TreeNode(1, null, t11e)
let t11b = new TreeNode(4, null, t11d)
let t11a = new TreeNode(5, t11b, t11c)

let t12g = new TreeNode(5, null, null)
let t12f = new TreeNode(4, null, null)
let t12e = new TreeNode(5, null, null)
let t12d = new TreeNode(4, null, null)
let t12b = new TreeNode(3, t12d, t12e)
let t12c = new TreeNode(3, t12f, t12g)
let t12a = new TreeNode(2, t12b, t12c)


const isSymmetric = require('./symmetricTree')

console.log(`test 1: ${isSymmetric(t1a) === true}`)
console.log(`test 2: ${isSymmetric(t2a) === false}`)
console.log(`test 3: ${isSymmetric(t3a) === false}`)
console.log(`test 4: ${isSymmetric(t4a) === false}`)
console.log(`test 5: ${isSymmetric(t5a) === false}`)
console.log(`test 6: ${isSymmetric(t6a) === true}`)
console.log(`test 7: ${isSymmetric(t7a) === true}`)
console.log(`test 8: ${isSymmetric(t8a) === true}`)
console.log(`test 9: ${isSymmetric(t9a) === false}`)
console.log(`test 10: ${isSymmetric(t10a) === false}`)
console.log(`test 11: ${isSymmetric(t11a) === false}`)
console.log(`test 12: ${isSymmetric(t12a) === false}`)




// console.log(isSymmetric(t1a))
// console.log(isSymmetric(t2a))
// console.log(isSymmetric(t3a))
// console.log(isSymmetric(t4a))
// console.log(isSymmetric(t5a))