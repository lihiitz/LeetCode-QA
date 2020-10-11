// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
const strStr = function(haystack, needle) {
    if (needle.length === 0){
        return 0
    }
    if (haystack.length === 0){
        return -1
    }
    
    if (haystack.length < needle.length){
        return -1
    }
    
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === needle[0]){
            if (haystack.length - i < needle.length){
                return -1
            }
            let count = 0
            for (let j = 0; j < needle.length; j++){
                if (needle[j] === haystack[j + i]){
                    count++
                }
            }
            if (count === needle.length){
                return i
            }
        }
    }
    return -1
}

module.exports = strStr