/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area = (D-B) * (C-A) + (H-F) * (G-E)
    
    if(E >= C || A >= G || F >= D || B >= H) return area
    
    var w = Math.min(G, C) - Math.max(E, A)
    var h = Math.min(D, H) - Math.max(F, B)
  
    return area - w * h
};