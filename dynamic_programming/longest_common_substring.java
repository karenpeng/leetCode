public class Solution {
    /**
     * @param A, B: Two string.
     * @return: the length of the longest common substring.
     */
    public int longestCommonSubstring(String A, String B) {
        //f[i][j] A前i个字符串和B前j个字符串的longest common substring
        //f[i][j] = A[i] == B[j] ? f[i-1][j-1]+1 : 0
        //f[0][j] = 0 f[i][0] = 0
        //return max
        
        int[][] f = new int[A.length()+1][B.length()+1];
        int max = 0;
        
        for(int i = 0; i < A.length()+1; i++){
            f[i][0] = 0;
        }
        for(int j = 1; j < B.length()+1; j++){
            f[0][j] = 0;
        }
        
        for(int i = 1; i < A.length()+1; i++){
            for(int j = 1; j < B.length()+1; j++){
                if(A.charAt(i-1) == B.charAt(j-1)){
                    f[i][j] = f[i-1][j-1]+1;
                }else{
                    f[i][j] = 0;
                }
                max = Math.max(max, f[i][j]);
            }
        }
        return max;
    }
}
