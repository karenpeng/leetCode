/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    var div = 1
    
    //这句和下面copy那段是一样的
    //我比较蠢 要写一坨
    //人家一句就搞定了
    //while(x / div >= 10) div *= 10
    
    //
    var copy = x
    while(copy > 10){
        copy = Math.floor(copy / 10)
        div *= 10
    }
    console.log(div)
    //
    
    while(x > 0){
        var l = Math.floor(x / div)
        var r = x % 10
        if(l !== r) return false
        
        console.log(x, div, l, r)
        x %= div
        x = Math.floor(x / 10)
        div /= 100


    }
    return true
};

console.log(isPalindrome(123454321))