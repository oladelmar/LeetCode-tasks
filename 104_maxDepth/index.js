function maxDepth(root) {

    let maxLevels = 0;

    function checkChildren(node, currentLevel) {
        
        if (!node) {
            maxLevels = Math.max(currentLevel - 1, maxLevels);
            return;
        }
        checkChildren(node.left, currentLevel + 1);
        checkChildren(node.right, currentLevel + 1);
    }

    checkChildren(root, 1);

    return maxLevels;
}

module.exports = maxDepth;
