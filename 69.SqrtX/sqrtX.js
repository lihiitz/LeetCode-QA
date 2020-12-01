// /**
//  * @param {number} x
//  * @return {number}
//  */

const mySqrt = function(x) {
    if (x === 0 || x === 1){
        return x
    }
    for (let i = 1; i <= x; i++){
        if((i * i) === x){
            return i
        }else if ((i * i) > x){
            return (i - 1)
        }
    }
}

module.exports = mySqrt

