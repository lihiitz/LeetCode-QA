// /**
//  * @param {string} s
//  * @return {number}
//  */
const lengthOfLastWord = function(s) {
    let len = s.length
    if (len === 0){
        return 0
    }
    
    let last = len - 1
    while(last >= 0 && s[last] === ' '){
        last --
    }
    if (last === -1){
        return 0
    }
    let count = 0
    while(last >= 0 && s[last] !== ' '){
        count ++
        last --
    }
    return count
}

module.exports = lengthOfLastWord