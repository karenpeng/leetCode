/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1
    if(needle.length === 0) return 0
    var i = 0
    var j = 0
    
    //be careful '<='
    for(var i = 0; i <= haystack.length - needle.length; i++){
        var remember = i
        for(var j = 0; j < needle.length; j++){
            if(haystack[remember] !== needle[j]) break
            remember ++
        }
        if(j === needle.length) return i
    }
    return -1
};