/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.lenght ===0 || nums.length ===1) return nums.length
   nums.sort(function(a, b){
       return a - b
   })
   var increase = 1
   var decrease = 1
   var max = 1
   for(var i = 0; i < nums.length-1; i++){
       if(nums[i] === nums[i+1] + 1) {
           decrease ++
           increase = 1
           max = Math.max(max, decrease)
       }else if(nums[i] === nums[i+1]-1){
           increase ++
           decrease = 1
           max = Math.max(max, increase)
       }else if(nums[i] === nums[i+1]){
           //increase ++
           //decrease ++
           max = Math.max(max, increase, decrease)
       }else{
           increase = 1
           decrease = 1
       }
   }
   return max
};