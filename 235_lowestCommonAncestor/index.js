function lowestCommonAncestor(root, p, q) {
    let lowestNode = root;

    function checkNode(node) {
        if (node.val > p.val && node.val > q.val) {
            // they are on the left
            checkNode(node.left);
        } else if (node.val < p.val && node.val < q.val) {
            // they are on the right
            checkNode(node.right);
        } else {
            // they are on both sides of the node, so this node is the lowest common ancestor
            lowestNode = node;
        }
    }
    
    checkNode(root);
    return lowestNode;

}

module.exports = lowestCommonAncestor;
