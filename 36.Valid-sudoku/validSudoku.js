
//  @param {character[][]} board
//  @return {boolean}

//TC = N^2
const isValidSudoku = function (board) {
    const rows = board.length
    const cols = board[0].length
    //check 1 - values are digits in range 1-9 or .
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const temp = board[i][j]
            if (isNaN(temp)) {
                if (temp !== '.') {
                    return false
                }
            } else {
                if (parseInt(temp) < 1 || parseInt(temp) > 9) {
                    return false
                }
            }
        }
    }
    //check 2 - Each row must contain the digits 1-9 without repetition.

    for (let i = 0; i < rows; i++) {
        let digits = []
        for (let j = 0; j < cols; j++) {
            const temp = board[i][j]
            if (isNaN(temp) === false) { // its a digit
                if (digits[temp] === 1) {
                    return false
                }
                digits[temp] = 1
            }
        }
    }

    //check 3 - Each column must contain the digits 1-9 without repetition.
    for (let i = 0; i < cols; i++){
        let digits = []
        for (let j = 0; j < rows; j++){
            const temp = board[j][i]
            if(isNaN(temp) === false){//its a digit
                if (digits[temp] === 1){
                    return false
                }
                digits[temp] = 1
            }
        }
    }

    //check 4 - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    for (let r = 0; r < rows; r = r + 3){
        for (let c = 0; c < cols; c = c + 3){
            let digits = []
            for (let i = r; i < r + 3; i++){
                for (let j = c; j < c + 3; j++){
                    let temp = board[i][j]
                    if (isNaN(temp) === false){
                        if (digits[temp] === 1){
                            return false
                        }
                        digits[temp] = 1
                    }
                }
            }
        }
    }
    return true
}

module.exports = isValidSudoku