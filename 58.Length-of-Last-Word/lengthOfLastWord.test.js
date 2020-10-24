// Input: "Hello World"
// Output: 5

const lengthOfLastWord = require('./lengthOfLastWord')

console.log(`test 1: ${lengthOfLastWord("Hello World") === 5}`)
console.log(`test 2: ${lengthOfLastWord("") === 0}`)
console.log(`test 3: ${lengthOfLastWord(" ") === 0}`)
console.log(`test 4: ${lengthOfLastWord("a") === 1}`)
console.log(`test 5: ${lengthOfLastWord("a ba  ") === 2}`)
console.log(`test 6: ${lengthOfLastWord("a  ") === 1}`)
