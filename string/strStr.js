/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0 ) return 0
    var begin = 0
    var i = 0
    while(i < haystack.length - needle.length + 1){
        if(haystack[i] === needle[begin]){
            begin++
            if(begin === needle.length) return i
            
            var j = i + 1
            while(j< haystack.length){
                if(haystack[j] === needle[begin]){
                    begin++
                    j++
                    
                    if(begin === needle.length) return i
                }else{
                    begin = 0
                    break
                }
            }
        }
        i++
    }
    return -1
};