/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length === 0) return []
    var list = []
    var result = []
    candidates.sort(function(a, b){
        return a - b
    })
    helper(0, list, result, candidates, target)
    return result
};

function helper(begin, list, result, candidates, target){
    if(target === 0) {
        result.push(deepCopy(list))
        return
    }
    
    if(target < 0) return
    
    for(var i = begin; i < candidates.length; i++){
        list.push(candidates[i])
        helper(i + 1, list, result, candidates, target - candidates[i])
        list.pop()
        if(i < candidates.length -1){
            while(candidates[i+1]===candidates[i]) i++
        }
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}
