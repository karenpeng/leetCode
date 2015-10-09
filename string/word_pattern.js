/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(/\s+/)
    if(arr.length !== pattern.length) return false
    var hash = {}
    for(var i = 0; i < arr.length; i++){
        if(hash.hasOwnProperty(arr[i])){
            if(hash[arr[i]] !== pattern[i]) return false
        }else{
            hash[arr[i]] = pattern[i]
        }
    }
    hash = []
    for(var i = 0; i < pattern.length; i++){
        if(hash.hasOwnProperty(pattern[i])){
            if(hash[pattern[i]] !== arr[i]) return false
        }else{
            hash[pattern[i]] = arr[i]
        }
    }
    return true
};