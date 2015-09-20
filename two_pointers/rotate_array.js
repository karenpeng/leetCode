/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length === 0) return
    k = k % nums.length
    if(k === 0) return 
    reverseM(nums, 0, nums.length-1)
    reverseM(nums, 0, k-1)
    reverseM(nums, k, nums.length-1)

};

function reverseM(nums, a, b){
    var i = a
    var j = b
    while(i < j){
        var temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
}