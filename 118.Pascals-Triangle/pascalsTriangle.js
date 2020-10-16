// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */

//TC = N^2 ?
const generate = function(numRows) {
    let res = []
    for (let i = 0; i < numRows; i++){
        let row = []
        row[0] = 1
        row[i] = 1
        for (let j = 1; j < i; j++){
            row[j] = res[i - 1][j] + res[i - 1][j - 1]
        }
        res.push(row)
    }
    return res
}

module.exports = generate