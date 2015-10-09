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
    while(i < haystack.length){
        if(haystack[i] === needle[j]){
            while(haystack[i] === needle[j] && i < haystack.length){
                i++
                j++
                if(j === needle.length) return i - j
            }
            j = 0
        }else{
            i++
        }
    }
    return -1
};