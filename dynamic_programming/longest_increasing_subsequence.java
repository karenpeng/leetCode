public class Solution {
    /**
     * @param nums: The integer array
     * @return: The length of LIS (longest increasing subsequence)
     */
    public int longestIncreasingSubsequence(int[] nums) {
        if(nums.length == 0) return 0;
        //f[i] 以i结尾的数组的LIS
        //if nums[i] >= nums[j]  f[i] =Math.max(f[j] + 1)
        //f[i] = 1
        //return max
        
        int[] f = new int[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            f[i] = 1;
        }
        int max = 0;
        
        for(int i = 1; i < nums.length; i++){
            for(int j = 0; j < i; j ++){
                if(nums[i] >= nums[j]){
                    f[i] = Math.max(f[i], f[j] +1);
                    max = Math.max(max, f[i]);
                }
                
            }
        }
        return max;
    }
}

