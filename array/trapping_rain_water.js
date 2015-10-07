/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var leftMax = []
    leftMax[0] = 0
    for(var i = 1; i < height.length; i++){
        leftMax[i] = Math.max(height[i-1], leftMax[i-1])
    }
    var rightMax = []
    rightMax[height.length-1] = 0
    var area = 0
    for(var i = height.length - 2;i >= 0; i--){
        rightMax[i] = Math.max(height[i+1], rightMax[i+1])
        if(i > 0){
            area += Math.min(leftMax[i], rightMax[i]) > height[i] ? (Math.min(leftMax[i], rightMax[i])-height[i]) : 0
        }
    }
    return area
};