/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0) return []
    var hash = {}
    strs.forEach(function(s){
        var key = s.split('').sort().join('')
        if(hash[key] === undefined) hash[key] = []
        hash[key].push(s)
    })
    
    var output = []
    for(var key in hash){
        hash[key].sort()
        output.push(hash[key])
    }
    return output
};