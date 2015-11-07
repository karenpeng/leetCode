public class Solution {
    /**
     * @param nums: A list of integers
     * @return: A list of integers includes the index of the first number 
     *          and the index of the last number
     */
    public ArrayList<Integer> subarraySum(int[] nums) {
        // write your code here
        ArrayList<Integer> result = new ArrayList<>();
        if(nums.length == 0) return result;
        
        Map<Integer, Integer>map = new HashMap<>();
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
          sum += nums[i];
          
          //第一种情况，sum本身就是0
          if(sum == 0){
            result.add(0);
            result.add(i);
            return result;
          }
          
          //第二种情况，加起来是0
          if(map.containsKey(sum)){
            //我和相同值的后一个
            result.add(map.get(sum) + 1);
            result.add(i);
            return result;
          }else{
            map.put(sum, i);
          }
      }
      
      return result;
    }
}
