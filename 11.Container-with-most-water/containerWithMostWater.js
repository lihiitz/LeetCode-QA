//TC (Time Complexity) = N^2
let maxArea1 = function (height) {
    let max = 0

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let minHeight = Math.min(height[i], height[j])
            let temp = minHeight * (j - i)
            if (temp > max) {
                max = temp
            }
        }
    }
    return max
}


//TC = N
let maxArea2 = function (height) {
    let max = 0

    let l = 0
    let r = height.length - 1
    while (l < r) {
        let temp = Math.min(height[l], height[r]) * (r - l)
        if (temp > max) {
            max = temp
        }
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
}

module.exports = maxArea2