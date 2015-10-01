/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = []
    this.stack2 = []
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length >0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()

};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length-1]
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return (this.stack1.length === 0 && this.stack2.length === 0)
};