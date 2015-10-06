/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0
    var j = 0
    while(j < nums.length && i < nums.length){
        while(j < nums.length &&  i < nums.length && nums[j] !== 0){
           swap(nums, i, j) 
           i++
           j++
        }
        j++
    }
};

function swap(arr, i, j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
 }