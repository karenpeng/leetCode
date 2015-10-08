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
    var area = (C-A) * ( D-B) + (G-E) * (H-F)
    
    //if there's no intersection
    if(E >= C || A >= G || B >= H || F >= D) return area
    else return area - (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F))
};