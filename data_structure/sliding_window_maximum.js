/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 
function Deck(){
    this.dq = []
}

Deck.prototype.push = function(val){
    this.dq.push(val)
}

Deck.prototype.popBack = function(){
    return this.dq.pop()
}

Deck.prototype.popFront = function(){
    return this.dq.shift()
}

Deck.prototype.isEmpty = function(){
    return this.dq.length === 0
}

Deck.prototype.peek = function(){
    return this.dq[this.dq.length-1]
}

Deck.prototype.front = function(){
    return this.dq[0]
}

var maxSlidingWindow = function(nums, k) {
    var dq = new Deck()
    var ans = []
    for(var i = 0; i < nums.length; i++){
      while(!dq.isEmpty() && nums[dq.peek()] <= nums[i]) dq.popBack()
      dq.push(i)
      if(!dq.isEmpty() && dq.front() === i - k) dq.popFront()
      if(i >= k - 1) ans.push(nums[dq.front()])
    }
    return ans
};

console.log(maxSlidingWindow([1]))

