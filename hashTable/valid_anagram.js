/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length === 0 && t.length === 0) return true
    if(s.length !== t.length) return false
    var hash = {}
    
    for(var j = 0; j < s.length; j++){
        if(hash[s[j]] === undefined) hash[s[j]] = 0
        hash[s[j]] ++
    }
    
    for(var i = 0; i < t.length; i++){
        if(hash[t[i]] === undefined) return false
        else {
            hash[t[i]] --
            if(hash[t[i]] < 0) return false
        }
    }
    return true
};