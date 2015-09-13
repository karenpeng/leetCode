//参考：http://www.kangry.net/blog/?type=article&article_id=213

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

//1.暴力滑动窗口
//time complexity O(n^2)
var minSubArrayLen = function(s, nums) {
    var len = 1
    while(len <= nums.length){
        var sum = 0
        
        for(var i = 0; i < len; i++){
            sum += nums[i]
            if(sum >= s) return len
        }
        
        var start = 0
        var end = start + len
        
        //开始滑动囖^ ^！！
        while(end < nums.length){
            sum -= nums[start]
            sum += nums[end]
            if(sum >= s)return len
            else{
                start ++
                end = start + len
            }
        }
        len ++
    }
    return 0
};

//2.伸缩窗口法
//哈哈哈 就像一条虫虫在爬呀爬
//time complexity O(n)
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var start = 0
    var end = 0
    var sum = 0
    var result = nums.length +1
    while(end < nums.length){
        
        while(sum < s && end < nums.length){
            sum += nums[end]
            end ++
        }
        
        while(sum >= s){
            result = Math.min(result, end - start)
            sum -= nums[start]
            start ++
        }
    }
    return result === nums.length + 1? 0: result
    
};


//3.二分查找法
//time complexity O(N logn)
//http://www.cnblogs.com/grandyang/p/4501934.html
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

  var len = nums.length
  var sums = []
  sums[0] = 0
  var result = len + 1
  
  for(var i = 1; i < len + 1; i++){
      sums[i] = sums[i-1] + nums[i-1]
  }
  
  for(var i = 0; i < len + 1; i++){
      var right = searchRight(i+1, len, sums[i]+s, sums)
      if(right === len + 1) break
      if(result > right - i) result = right - i
  }
  return result === len + 1 ? 0 : result
};

function searchRight(start, end, target, sums){
    while(start <= end){
        var mid = Math.floor((start + end)/2)
        if(sums[mid] >= target) end = mid - 1
        else start = mid + 1
    }
    return start
}