/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0 ) return 0
    var i = 0
    var j = nums.length-1
    while(i <= j){
        if(nums[i] === val){
            swap(i, j , nums)
            j--
        }else{
            i++
        }
    }
    return i
};

function swap(i, j, arr){
    var tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
    
}