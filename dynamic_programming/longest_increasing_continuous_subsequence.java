public class Solution {
    /**
     * @param A an array of Integer
     * @return  an integer
     */
    public int longestIncreasingContinuousSubsequence(int[] A) {
        if(A.length == 0) return 0;
        
        int increase = 1;
        int decrease = 1;
        int max = 1;
        
        for(int i = 1 ; i < A.length; i++){
            if(A[i-1] < A[i]){
                increase ++;
                decrease = 1;
                max = Math.max(max, increase);
            }else if(A[i-1] > A[i]){
                decrease++;
                increase = 1;
                max = Math.max(max, decrease);
            }
        }
        
        return max;
    }
}
