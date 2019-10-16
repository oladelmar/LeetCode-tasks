function isSameTree(p, q) {
    let sameTree = true;

    function isSameNode(p, q) {
        if (!p && !q) return;

        if (!p || !q) {
            sameTree = false;
            return;
        }
        if (p.val !== q.val) {
            sameTree = false;
            return;
        }

        isSameNode(p.left, q.left);
        isSameNode(p.right, q.right);
    }

    isSameNode(p, q);

    return sameTree;
}

module.exports = isSameTree;
