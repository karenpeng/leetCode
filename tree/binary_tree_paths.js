/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root === null) return []
  var word = ''
  var result = []
  helper(root, word, result)
  return result
};

function helper(root, word, result){
    if(root === null) return
    word += ('->' + root.val)
    if(root.left === null && root.right === null) result.push(word.substring(2, word.length))
    helper(root.left, word, result)
    helper(root.right, word, result)
}