/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var i = 0
    var n = nums.length + 1
    while(i < n){
        if(nums[i] !== i + 1 && nums[i] > 0 && nums[i] <= n
        && nums[i] !== nums[nums[i] - 1]){
            swap(nums, i, nums[i] - 1)
        }else{
            i++
        }
    }
    for(var i = 0; i < n; i++){
        if(nums[i] !== i+1) return i + 1
    }
    return n + 1
};

function swap(arr, i, j){
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

console.log(firstMissingPositive([3,4,-1,1]))