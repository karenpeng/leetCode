/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //don't forget to module
    k = k % nums.length
    myReverse(nums, 0, nums.length-1)
    myReverse(nums, 0, k-1)
    myReverse(nums, k, nums.length -1)
};

function myReverse(arr, start, end){
    var i = start
    var j = end
    while(i < j){
        var tmp = arr[i] 
        arr[i] = arr[j]
        arr[j] = tmp
        i++
        j--
    }
}