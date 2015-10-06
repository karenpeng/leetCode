/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length === 0 || nums.length === 1) return
    var i = 0
    var j = 0
    var k = nums.length - 1
    
    while(j <= k){
        if(nums[j] === 0){
            swap(nums, i, j)
            i++
            j++
        }else if(nums[j] === 2){
            swap(nums, j, k)
            k--
        }else{
            j++
        }
    }
};

function swap(arr, i, j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}