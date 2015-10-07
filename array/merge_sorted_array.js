/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m + n -1
    var j = m-1
    var k = n-1
    while(j >= 0 && k >= 0){
        if(nums1[j] > nums2[k]){
            nums1[i] = nums1[j]
            j--
        }else{
            nums1[i] = nums2[k]
            k--
        }
        i--
    }
    while(k >= 0){
        nums1[i] = nums2[k]
        k--
        i--
    }
};