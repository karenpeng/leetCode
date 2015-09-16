/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length === 0) return 0
    
    var lmax = []
    lmax[0] = height[0]
    for(var i = 1; i < height.length; i++){
        lmax[i] = Math.max(lmax[i-1], height[i-1])
    }
    
    var rmax = []
    var area = 0
    rmax[height.length-1] = height[height.length-1]
    for(var i = height.length-2; i>=0; i--){
        rmax[i] = Math.max(rmax[i+1], height[i+1])
        if(i > 0){
            area += (Math.min(lmax[i], rmax[i]) > height[i]) ? Math.min(lmax[i], rmax[i]) - height[i] : 0
        }
    }
    return area
};