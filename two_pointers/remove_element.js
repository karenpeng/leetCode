/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0
    var j = nums.length-1
    while(i <= j){
        if(nums[i] === val){
            swap(nums, i, j)
            j--
        }else{
            i++
        }
    }
    return i
};

function swap(arr, i, j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}