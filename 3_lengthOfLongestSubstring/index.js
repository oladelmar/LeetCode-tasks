// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Solution 
// in preudocode

// Create an empty hashMap (key/val -> character/index)
// Create start and max variable, set both with initial values to zero

// Loop through Input String
//     If current Character in HashMap & has index >= start
//         Set start to index for character found in Hashmap + 1
//     Set key/value pair on Hashmap to be current Character/current Index
//     If length of current window is greater than max
//         Set max to length of current window

function lengthOfLongestSubstring(s) {
    let windowCharsMap = {}
    let windowStart = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i]
        
        if(windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1
        }
        windowCharsMap[endChar] = i
        maxLength = Math.max(maxLength, i + 1 - windowStart)
    }
    return maxLength
}
