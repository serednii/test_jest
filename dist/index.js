var lengthOfLongestSubstring = function (s) {
    let newStr = '';
    let maxLengthStr = 0;
    let isMax = false
    debugger
    for (let i = 0; i < s.length; i++) {
        if (!newStr.includes(s[i])) {
            newStr += s[i]
            isMax = false
        } else {
            maxLengthStr = Math.max(maxLengthStr, newStr.length)
            newStr = s[i]
            isMax = true
        }
    }

    isMax || (maxLengthStr = Math.max(maxLengthStr, newStr.length))
    return maxLengthStr
};

const len = lengthOfLongestSubstring('dvdf')
console.log(len)