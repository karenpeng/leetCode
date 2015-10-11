/**
 * @constructor
 */
var doubleLinkList = function(key, val){
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
        this.setTail(node)
        return node.val
    }
};

LRUCache.prototype.removeNode = function(node){
    //在队头
   if(node.pre === null){
       this.head = node.next
   }else{
       //接前面
       node.pre.next = node.next
   }
   //在队尾
   if(node.next === null){
       this.tail = node.pre
   }else{
       //接后面
       node.next.pre = node.pre
   }
}

LRUCache.prototype.setTail = function(node){
    if(this.tail === null){
        this.tail = node
        this.head = node
        node.pre = null
    }else{
        node.pre = this.tail
        this.tail.next = node
        this.tail = node
    }
    node.next = null
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
       this.setTail(node)
       node.val = value
   }else{
       var node = new doubleLinkList(key, value)
       if(Object.keys(this.map).length < this.capacity){
           this.setTail(node)
       }else{
           delete this.map[this.head.key]
           this.removeNode(this.head)
           this.setTail(node)
       }
       // don't forget to put it into the map!!!
       this.map[key] = node
   }
};