public class Solution {
    /**
     * @param nums: A list of integers
     * @return: An integer denotes the sum of max two non-overlapping subarrays
     */
    public int maxTwoSubArrays(ArrayList<Integer> nums) {
        // write your code
        int size = nums.size();
        int[] left = new int[size];
        int [] right = new int[size];
        
       int sum = nums.get(0);
       left[0] = nums.get(0);
       
       for(int i = 1; i < nums.size(); i++){
           sum = Math.max(nums.get(i), sum + nums.get(i));
           left[i] = Math.max(left[i-1], sum);
       }
       
       sum = nums.get(size-1);
       right[size-1] = nums.get(size-1);
        for(int i = nums.size() - 2; i >= 0; i--){
           sum = Math.max(nums.get(i), sum + nums.get(i));
           right[i] = Math.max(right[i+1], sum);
       }
       
       //it's different than stockIII
       int max = nums.get(0) + nums.get(size-1);
       
       for(int i = 0; i<size-1; i++){
           max = Math.max(max, left[i] + right[i+1]);
       }
       return max;  
    }    
}
