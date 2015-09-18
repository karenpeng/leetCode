/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    var i = m - 1
    var j = n - 1
    
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[i + j + 1] = nums1[i]
            i--
        }else{
            nums1[i + j + 1] = nums2[j]
            j--
        }
    }
    
    while( j >= 0 ){
        nums1[j] = nums2[j]
        j--
    }
};