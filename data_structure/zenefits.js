// function GraphNode(val){
//   this.val = val;
//   this.manage = [];
// }

// function main(arr, nodeName){
//   var hash = generate(arr);
//   print(nodeName, hash, '-');
// }

// function generate(arr){
//   var hash = {};
//   arr.forEach(function(pair){
//     var employee = pair[0];
//     var manager = pair[1];
//     if(!hash.hasOwnProperty(manager)){
//       hash[manager] = new GraphNode(manager);
//     }
//     hash[manager].manage.push(new GraphNode(employee));
//   });
//   return hash;
// }

// function print(nodeName, hash, prefix){
//   if(!hash.hasOwnProperty(nodeName)) return;
//   hash[nodeName].manage.forEach(function(node){
//     console.log(prefix + node.val);
//     print(node.val, hash, prefix + '-');
//   });
// }

// main([['A','B'],['C','B'], ['D','A'], ['B','E']], 'B')


// //maze
// function main(){

// }

// function dfs(x, y, visited, board, targetX, targetY, pathLen){
//   if(x === targetX && y === targetY) return pathLen;
//   if(board[x] === undefined || board[x][y] === undefined || visited[x][y] || board[x][y] === 1) return;
//   pathLen++
//   bfs(x, y-1, visited, board, targetX, targetY, pathLen)
//   bfs(x, y-1, visited, board, targetX, targetY, pathLen)
//   bfs(x, y-1, visited, board, targetX, targetY, pathLen)
//   bfs(x, y-1, visited, board, targetX, targetY, pathLen)
//   min()
// }


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    var max = 1
    var hash = {}
    var i = 0, j = 0;
    var len = s.length
    
    while(len - 1 - i >= max){
        
        if(!hash.hasOwnProperty(s[j]) || hash[s[j]] < i){
             hash[s[j]] = j
             max = Math.max(max, j - i + 1)
        }
        else{
            i = hash[s[j]] + 1
            hash[s[j]] = j
            max = Math.max(max, j - i + 1)
        }
        j++
        
    }
    return max
};

console.log(lengthOfLongestSubstring("tmmzuxt"))

