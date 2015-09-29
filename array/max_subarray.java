public class Solution {
    /**
     * @param nums: A list of integers
     * @return: A integer indicate the sum of max subarray
     */
    public int maxSubArray(ArrayList<Integer> nums) {
        // write your code
        //状态： f[i] -> 以i结尾的max subarray
        //函数： f[i] = Math.max(nums[i], nums[i] + f[i-1])
        //初始： f[0] = nums[0]
        //return 所有f[i]里面最大的那个
        if(nums.size() == 0) return 0;
        int[] f = new int[nums.size()];
        f[0] = nums.get(0);
        int max = nums.get(0);
        
        for(int i = 1; i < nums.size(); i++){
            f[i] = Math.max(nums.get(i) + f[i-1], nums.get(i));
            max = Math.max(max,f[i]);
        }
        return max;
    }
}
