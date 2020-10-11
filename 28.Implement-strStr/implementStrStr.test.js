// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Input: haystack = "", needle = ""
// Output: 0

const strStr = require('./implementStrStr')

const res1 = strStr("hello", "ll")
const res2 = strStr("aaaaa", "bba")
const res3 = strStr("", "")

console.log(`
    test 1: ${res1 === 2}
    test 2: ${res2 === -1}
    test 3: ${res3 === 0}
`)