/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 0) return
    var i = 0
    var j = 0
    while(j < nums.length){
        if(nums[j] !== 0){
            swap(i, j, nums)
            i++
        }
        j++
    }
};

function swap(i, j, nums){
    var temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}