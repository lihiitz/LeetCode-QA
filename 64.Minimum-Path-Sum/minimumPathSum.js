// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

//You can only move either down or right at any point in time.

const minPathSum = function(grid) {
    if (grid.length === 1 && grid[0].length === 1){
        return grid[0][0]
    }
    if (grid.length === 1){
        return grid[0].reduce((a, b) => a + b, 0)
    }
    if (grid[0].length === 1){
        // return grid.reduce((arr1, arr2) => arr1[0] + arr2[0], 0)
        let sum = 0
        for (let arr of grid){
            sum += arr[0]
        }
        return sum
    }   
    
    let right = grid[0][0] + minPathSum(grid.map(function(arr){
            return arr.slice(1)
        }))

    let down = grid[0][0] + minPathSum(grid.slice(1))

    return Math.min(right, down)
}

module.exports = minPathSum