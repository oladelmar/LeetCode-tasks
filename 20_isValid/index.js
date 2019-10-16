const isValid = s => {
    
    let stack = []
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (pairsHashMap[char]) {
            stack.push(char)
        } else {
            const topOfStack = stack[stack.length - 1]
            char === pairsHashMap[topOfStack] ? stack.pop() : stack.push(char)
        }
    }

    return stack.length === 0
};
