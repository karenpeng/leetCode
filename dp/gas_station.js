/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(gas === null || cost === null || gas.length === 0 || cost.length === 0 || gas.length !== cost.length){
        return -1
    }
    
    var sum = 0
    var total = 0
    var index = 0
    for(var i = 0; i < gas.length; i++){
        sum += gas[i] - cost[i]
        total += gas[i] - cost[i]
        if(sum < 0){
            sum = 0
            index = i +1
        }
    }
    if(total < 0){
        return -1
    }
    return index
};