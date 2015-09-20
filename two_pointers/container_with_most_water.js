/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 0) return 0
    var i = 0
    var j = height.length-1
    var area = 0
    var max = 0
    while(i < j){
        area = Math.min(height[i], height[j]) * (j - i)
        max = Math.max(max, area)
        if(height[i] > height[j]){
            j --
        }else{
            i++
        }
    }
    return max
};