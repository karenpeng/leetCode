public class Solution {
    /**
     * @param nums: A list of integers
     * @return: An integer indicate the value of maximum difference between two
     *          Subarrays
     */
    public int maxDiffSubArrays(ArrayList<Integer> nums) {
        // write your code
        int size = nums.size();
        if(size == 0) return 0;
        
        int[] leftMax = new int[size];
        int[] leftMin = new int[size];
        int[] rightMax = new int[size];
        int[] rightMin = new int[size];
        
        int curMax = nums.get(0);
        int curMin = nums.get(0);
        leftMax[0] = nums.get(0);
        leftMin[0] = nums.get(0);
        
        for(int i = 1; i < size; i++){
            curMax = Math.max(nums.get(i), nums.get(i) + curMax);
            curMin = Math.min(nums.get(i), nums.get(i) + curMin);
            
            leftMax[i] = Math.max(curMax, leftMax[i-1]);
            leftMin[i] = Math.min(curMin, leftMin[i-1]);
        }
        
        curMax = nums.get(size-1);
        curMin = nums.get(size-1);
        rightMax[size-1] = nums.get(size-1);
        rightMin[size-1] = nums.get(size-1);
        
        for(int i = size-2; i >= 0; i--){
            curMax = Math.max(nums.get(i), nums.get(i) + curMax);
            curMin = Math.min(nums.get(i), nums.get(i) + curMin);
            
            rightMax[i] = Math.max(curMax, rightMax[i+1]);
            rightMin[i] = Math.min(curMin, rightMin[i+1]);
        }
        
        int max = 0;
        for(int i = 0; i < size-1; i++){
            //注意一定要先写左再写右
            max = Math.max(max, Math.abs(leftMax[i] - rightMin[i+1]));
            max = Math.max(max, Math.abs(leftMin[i] - rightMax[i+1]));
        }
        return max;
    }
}


