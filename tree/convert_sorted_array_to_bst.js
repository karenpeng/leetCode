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
    var start = 0
    var end = nums.length -1
    return helper(start, end, nums)
};

function helper(start, end, nums){
    if(start === end) return new TreeNode(nums[start])
    if(start > end) return null
    var mid = Math.floor((start + end)/2)
    var root = new TreeNode(nums[mid])
    root.left = helper(start, mid -1, nums)
    root.right = helper(mid + 1, end, nums)
    return root
}