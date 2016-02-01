/**
 * @constructor
 */
 
var Dbll = function(key, val){
    this.key = key
    this.val = val
    this.pre = null
    this.next = null
}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.head = new Dbll(null)
    this.tail = new Dbll(null)
    this.head.next = this.tail
    this.tail.pre = this.head
};

LRUCache.prototype.setTail = function(node){
    node.next = this.tail
    node.pre = this.tail.pre
    this.tail.pre.next = node
    this.tail.pre = node
}

LRUCache.prototype.removeNode = function(node){
    node.pre.next = node.next
    node.next.pre = node.pre
}
/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.hash.hasOwnProperty(key)) return -1
    var node = this.hash[key]
    this.removeNode(node)
    this.setTail(node)
    return this.tail.pre.val
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.hash.hasOwnProperty(key)){
        var node = this.hash[key]
        this.removeNode(node)
        this.setTail(node)
        //don't forget this!
        node.val = value
    }else{
        if(Object.keys(this.hash).length === this.capacity){
            delete this.hash[this.head.next.key]
            this.removeNode(this.head.next)
        }
        var node = new Dbll(key, value)
        this.setTail(node)
        //don't forget this!
        this.hash[key] = node
    }
};
