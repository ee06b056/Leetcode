/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(!root) { return null }
    if(root.val <= p.val){
        return inorderSuccessor(root.right,p)
    }else if(p.val <= root.val){
        const left = inorderSuccessor(root.left,p)
        return left ? left : root
    }
};