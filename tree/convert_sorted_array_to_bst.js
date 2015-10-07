/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null
    return helper(0, nums.length-1, nums)
};

function helper(start, end, nums){
    if(start > end) return null
    if(start === end) return new TreeNode(nums[start])
    var mid = Math.floor((start + end)/2)
    var node = new TreeNode(nums[mid])
    node.left = helper(start, mid-1, nums)
    node.right = helper(mid+1, end, nums)
    return node
}