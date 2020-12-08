
// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

const isValidPalindrome = require('./validPalindrome')

console.log(`
    test 1: ${isValidPalindrome("") === true},
    test 2: ${isValidPalindrome("A man, a plan, a canal: Panama") === true},
    test 3: ${isValidPalindrome("race a car") === false},
    test 4: ${isValidPalindrome("abcd") === false},
    test 5: ${isValidPalindrome("0P") === false},
    test 6: ${isValidPalindrome("a") === true}
`)