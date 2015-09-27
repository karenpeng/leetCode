/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var mix = getTwoXor(nums)
    var index = firstBit1(mix)
    
    var num1 = 0
    var num2 = 0
    for(var i = 0; i < nums.length; i++){
        if(isBit1(nums[i], index)){
            num1 ^= nums[i]
        }else{
            num2 ^= nums[i]
        }
    }
    return [num1, num2]
};

function getTwoXor(nums){
    var haha = 0
    nums.forEach(function(n){
        haha ^= n
    })
    return haha
}

function firstBit1(num){
    var index = 0
    //这个括号超级超级关键！！！！！！！
    while((num & 1) === 0){
        index++
        num >>= 1
    }
    return index
}

function isBit1(num, index){
    num = num >> index
    return (num & 1)
}



singleNumber([1, 2, 1, 3, 2, 5])
