/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    if(height === null || height.length === 0) return 0
    var stack = []
    var max = 0
    
    for(var i = 0; i <= height.length; i++){
        var cur = i === height.length ? -1 : height[i]
        while(stack.length !== 0 && cur <= height[stack[stack.length-1]]){
            var h = height[stack.pop()]
            var w = stack.length === 0 ? i : i - stack[stack.length-1] - 1
            max = Math.max(max, h * w)
        }
        stack.push(i)
    }
    return max
};