/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a, b){
        return a - b
    })
    var list = []
    var result = []
    helper(0, list, result, candidates, target)
    return result
};

function helper(begin, list, result, candidates, target){
    if(target === 0){
        result.push(deepCopy(list))
        return
    }
    if(target < 0) return
    for(var i = begin; i < candidates.length; i++){
        list.push(candidates[i])
        helper(i+1, list, result, candidates, target-candidates[i])
        list.pop()

        //这竟然是跟下面不一样的， 三观尽毁！
        //while(i < candidates.length -1 && candidates[i+1]===candidates[i]) i++

        //这个会把最后一个元素也考虑到啦，上面的不会
        if(i < candidates.length -1){
            while(candidates[i+1]===candidates[i]) i++
        }


    }
}

function deepCopy(arr){
    var out = []
    arr.forEach(function(e){
        out.push(e)
    })
    return out
}