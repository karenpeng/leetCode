/**
 * @constructor
 */
function ListNode(key, val) {
    this.key = key
    this.val = val
    this.pre = null
    this.next = null
}

var LRUCache = function(capacity) {
    this.map = {}
    this.capacity = capacity
    this.head = null
    this.tail = null
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.hasOwnProperty(key)){
        return -1
    }else{
        var node = this.map[key]
        this.removeNode(node)
        this.setHead(node)
        return node.val
    }
};

LRUCache.prototype.removeNode = function(node){
    if(node.pre === null){
        this.head = node.next
    }else{
        node.pre.next = node.next
    }
    if(node.next === null){
        this.tail = node.pre
    }else{
        node.next.pre = node.pre
    }
}

LRUCache.prototype.setHead = function(node){
    node.next = this.head
    node.pre = null
    if(this.head !== null){
        this.head.pre = node
    }
    this.head = node
    if(this.tail == null){
        this.tail = node
    }
}

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.map.hasOwnProperty(key)){
        var node = this.map[key]
        this.removeNode(node)
        this.setHead(node)
        node.val = value
    }else{
        var node = new ListNode(key, value)
        if(Object.keys(this.map).length < this.capacity){
            this.setHead(node)
        }else{
            delete this.map[this.tail.key]
            this.removeNode(this.tail)
            this.setHead(node)
        }
        this.map[key] = node
    }
};