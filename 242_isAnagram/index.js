function isAnagram(s, t) {
    
    if (s.length !== t.length) {
        return false
    }

    const sCharCounts = {}
    
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i]
        // again my option, this one is faster and consumes less memory than his option for this 'if' statement
        if (sCharCounts[tChar] > 0) {
            sCharCounts[tChar]--
        } else {
            return false
        }
        
    }
    return true
}
