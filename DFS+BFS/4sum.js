/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b){
        return a - b
    })
    var list = []
    var result = []
    helper(nums, target, 0, nums.length-1, 4, list, result)
    return result
};

function helper(nums, target, start, end, k, list, result){
    if(k <= 0) return
    if(k === 1){
       for(var i = start; i <= end; i++){
           if(nums[i] === target){
               list.push(target)
               result.push(deepCopy(list))
               list.pop()
               return
           }
       }
        return
    }
    if(k === 2){
        twoSum(nums, target, start, end, list, result)
        return
    }
    else{
        for(var i = start; i <= end - k + 1; i++){
            while(i > start && nums[i]===nums[i-1])i++
            list.push(nums[i])
            helper(nums, target-nums[i], i+1, end, k-1, list, result)
            list.pop()
        }
    }
}

function twoSum(nums, target, start, end, list, result){
    var l = start
    var r = end
    while(l <r){
        if(nums[l] + nums[r] === target){
            list.push(nums[l], nums[r])
            result.push(deepCopy(list))
            list.pop()
            list.pop()
            l++
            r--
            while(nums[l] === nums[l-1])l++
            while(nums[r] === nums[r+1])r--
        }else if(nums[l] + nums[r] > target){
            r--
        }else{
            l++
        }
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}