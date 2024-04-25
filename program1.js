function longestSubstring(s) {
    // Implementation of longestSubstring function
}

module.exports = { longestSubstring };


function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        // If the character is already in the current substring, update the start pointer
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        // Update the index of the current character
        charIndexMap[char] = end;

        // Update the maximum length if needed
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
