/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var start = 0
    var end = x
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        var times = mid * mid
        if( times === x) return mid
        else if(times > x) end = mid
        else start = mid
    }
    
    if(start * start === x) return start
    if(end * end === x) return end
    if(start * start < x) return start
    return end
};