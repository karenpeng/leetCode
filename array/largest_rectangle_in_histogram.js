/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    if(height === null || height.length === 0) return 0
    
    var stack = []
    var max = 0
    
    for(var i = 0; i <= height.length; i++){
      var cur
      if(i < height.length) cur = height[i]
      else cur = -1
     
      while(stack.length > 0 && cur <= height[stack[stack.length-1]]){
          h = height[stack.pop()] 
          
          //这句话好值钱啊！！！
          w = stack.length === 0 ? i : i - stack[stack.length-1] - 1
          
          max = Math.max(max, w * h)
      }
      stack.push(i)
   
    }
    return max
};