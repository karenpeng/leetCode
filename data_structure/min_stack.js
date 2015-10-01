/**
 * @constructor
 */
var MinStack = function() {
    this.stack = []
    this.minList = [Infinity]
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(x <= this.minList[this.minList.length-1]){
        this.minList.push(x)
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var temp = this.stack.pop()
    if(temp === this.minList[this.minList.length-1]){
        this.minList.pop()
    }
    return temp
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.minList[this.minList.length-1]
};