/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length === 0) return
    var i = 0
    var runner = 0
    var j = nums.length-1
    
    while(runner <= j){
        if(nums[runner] === 0){
            swap(i, runner, nums)
            i++
            runner++
        }
        else if(nums[runner] === 2){
            swap(j, runner, nums)
            j--
        }else{
            runner ++
        }
    }
};

function swap(i, j, array){
    var tem = array[i]
    array[i] = array[j]
    array[j] = tem
}