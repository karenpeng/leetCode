/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var i = 0
    var n = nums.length + 1
    while(i < n){
        if(nums[i] !== i + 1 && nums[i] > 0 && nums[i] <= n

            //哎哟喂 有重复的数 又刚好下标成这样关系 就死循环了！
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

//http://bangbingsyb.blogspot.com/2014/11/leetcode-first-missing-positive.html

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var i = 0
    var n = nums.length + 1

    //这里是n!
    while(i < n){
        //1.如果A[i]<1或者A[i]>n。说明A[i]一定不是first missing positive。跳过
        if( nums[i] < 1 || nums[i] > n )i++
        //2.如果A[i] = i+1，说明A[i]已经在正确的位置，跳过
        else if(nums[i] === i + 1) i++
        //3.当A[i] = A[A[i]-1]时会陷入死循环。这种情况下直接跳过。
        else if(nums[i] === nums[nums[i] - 1]) i++
        else{
            swap(nums, i, nums[i] - 1)
        }
    }

    //这里也是n!!!
    for(var i = 0; i < n; i++){
        if(nums[i] !== i+1) return i + 1
    }
    return n + 1
};

//注意写成n  考虑一下空input的情况

function swap(arr, i, j){
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}