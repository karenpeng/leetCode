/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};

function dfs(grid, i, j){
    if(i <0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]!=='1') return
    grid[i][j] = '2'
    dfs(grid, i-1, j)
    dfs(grid, i+1, j)
    dfs(grid, i, j-1)
    dfs(grid, i, j+1)
}