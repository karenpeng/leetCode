/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var result = []
    var deque = []
    for(var i = 0; i < nums.length; i++){
        while(deque.length > 0 && 
        nums[deque[deque.length-1]] <= nums[i]){
            deque.pop()
        //console.log(deque)
        }
        deque.push(i)
        //console.log('i', deque)
        if(deque.length > 0 && deque[0] === i - k) deque.shift()
        if(i >= k - 1) result.push(nums[deque[0]])
    }
    return result
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)