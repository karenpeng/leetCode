/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   var len = nums1.length + nums2.length;
    if (len % 2 == 1) {
        return findKth(nums1, 0, nums2, 0, Math.floor(len/2) + 1);
    }
    return (
        findKth(nums1, 0, nums2, 0, Math.floor(len/2)) + findKth(nums1, 0, nums2, 0, Math.floor(len/2) + 1)
    )/2; 
};


function findKth(a, aStart, b, bStart, k){
    //empty array
    if(aStart >= a.length) return b[bStart + k - 1]
    if(bStart >= b.length) return a[aStart + k - 1]
    
    //k is one
    if(k === 1) return Math.min(a[aStart], b[bStart])
    
    //not long enough
    var aEl = aStart+Math.floor(k/2)-1 >= a.length? Infinity :
    a[aStart + Math.floor(k/2) - 1]
    var bEl = bStart+Math.floor(k/2)-1 >= b.length? Infinity :
    b[bStart + Math.floor(k/2) - 1]
    if(aEl < bEl){
        return findKth(a, aStart + Math.floor(k/2), b, bStart, k - Math.floor(k/2))
    }else{
        return findKth(a, aStart, b, bStart + Math.floor(k/2), k - Math.floor(k/2))
    }
}
