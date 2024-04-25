// function longestSubstring(s) {
//     // Implementation of longestSubstring function
// }

// module.exports = { longestSubstring };


function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    const charIndexMap = {};

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
            
            left = charIndexMap[currentChar] + 1;
        }
        // Update the index of the current character
        charIndexMap[currentChar] = right;
        // Update the maximum length if needed
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}