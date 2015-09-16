/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var hash = {}
    for(var i = 0; i < s.length; i++){
        if(hash[s[i]] === undefined) hash[s[i]] = t[i]
        else if(hash[s[i]] !== t[i]) return false
    }
    
    hash = {}
    for(var j = 0; j < t.length; j++){
        if(hash[t[j]] === undefined) hash[t[j]] = s[j]
        else if(hash[t[j]] !== s[j]) return false
    }
    
    return true
};