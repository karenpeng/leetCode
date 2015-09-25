/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0) return 0
    var start = 0
    var end = x
    return helper(start, end, x)
};

function helper(start, end, x){
    while(start + 1< end){
        var mid = Math.floor((start + end) / 2)
        var square = mid * mid
        if(square === x) return mid
            //!!!! is mid not mid - 1 or mid + 1
        else if(square < x) start = mid
        else end = mid
    }
    if(start * start === x) return start
    if(end * end === x) return end
    if(start * start < x) return start
    return end
}