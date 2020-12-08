// /**
//  * @param {string} s
//  * @return {boolean}
//  */
const isPalindrome = function(s) {
    let str = ""
    for (let i = 0; i < s.length; i++){
        if (((s[i] >= 'a') && (s[i] <= 'z')) || ((s[i] >= 'A') && (s[i] <= 'Z')) || ((s[i] >= '0') && (s[i] <= '9'))){
            str += s[i].toLowerCase()
        }
    }
    if (str.length <= 1){
        return true
    }

    for (let i = 0, j = str.length - 1; i <= j; i++, j--){
        if (str[i] !== str[j]){
            return false
        }
    }
    return true
}

module.exports = isPalindrome