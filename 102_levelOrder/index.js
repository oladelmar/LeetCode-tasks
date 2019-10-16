// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

function levelOrder(root) {
    
    const levels = [];
    
    function addNode(node, i) {
        if (!node) return;

        if (!levels[i]) {
            levels[i] = [];
        }
        levels[i].push(node.val);

        addNode(node.left, i + 1);
        addNode(node.right, i + 1);
    };

    addNode(root, 0);

    return levels;
}
