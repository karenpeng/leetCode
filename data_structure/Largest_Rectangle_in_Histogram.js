/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var stack = []
    var max = 0
    for(var i = 0; i < heights.length + 1; i++){
        var cur = i === heights.length ? -Infinity : heights[i]
        while(stack.length > 0 && cur < heights[stack[stack.length - 1]]){
            var h = heights[stack.pop()]
            var w = stack.length === 0 ? i : i - stack[stack.length-1] - 1
            max = Math.max(max, w * h)
        }
        stack.push(i)
    }
    return max
};
