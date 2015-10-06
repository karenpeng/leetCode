/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var prime = []
    for(var i = 2; i < n; i++){
        prime[i] = true
    }
    
    for(var i = 2; i * i < n; i++){
        if(!prime[i]) continue
        for(var j = i * i; j < n; j += i){
            prime[j] = false
        }
    }
    
    var count = 0
    for(var i = 2; i < n; i++){
        if(prime[i]) count ++
    }
    return count
};