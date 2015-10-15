/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candies = []
    ratings.forEach(function(d, i){
        candies[i] = 1
    })
    
    for(var i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1] + 1
        }
    }
    
    for(var i = ratings.length -2; i >= 0; i--){
        if(ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i], candies[i+1] + 1)
        }
    }
    
    var sum = 0
    candies.forEach(function(c){
        sum += c
    })
    return sum
};