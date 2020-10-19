// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

//You can only move either down or right at any point in time.

// const minPathSum = function(grid) {
//     if (grid.length === 1 && grid[0].length === 1){
//         return grid[0][0]
//     }
//     if (grid.length === 1){
//         return grid[0].reduce((a, b) => a + b, 0)
//     }
//     if (grid[0].length === 1){
//         // return grid.reduce((arr1, arr2) => arr1[0] + arr2[0], 0)
//         let sum = 0
//         for (let arr of grid){
//             sum += arr[0]
//         }
//         return sum
//     }   
    
//     let right = grid[0][0] + minPathSum(grid.map(function(arr){
//             return arr.slice(1)
//         }))

//     let down = grid[0][0] + minPathSum(grid.slice(1))

//     return Math.min(right, down)
// }

//DP Solution - not mine
const minPathSum = function(grid) {
    if (grid.length === 0){
        return -1
    }
    let dp = []
    for (let i = 0; i < grid.length; i++){
        dp.push(new Array(grid[0].length).fill(0))
    }
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (i === 0 && j === 0){
                dp[0][0] = grid[0][0]
            }
            else if (i === 0){ //first row
                dp[i][j] = grid[i][j] + dp[i][j - 1]
            }
            else if (j === 0){ //first col
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            }
            else{
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
}

module.exports = minPathSum