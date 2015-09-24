/**
 * @param {number[]} nums
 * @return {number}
 */

//method 1:
var missingNumber = function(nums) {
    return (nums.length+1) * nums.length / 2 - sum(nums)
};

function sum(arr){
    var sum = 0
    arr.forEach(function(e){
        sum += e
    })
    return sum
}

//method 2:
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum1 = sum(nums)
    
    var sum2 = 0
    for(var i = 0; i < nums.length + 1; i++){
        sum2 ^= i
    }
    
    return sum1^sum2
};

function sum(arr){
    var s = 0
    arr.forEach(function(e){
        s ^= e
    })
    return s
}