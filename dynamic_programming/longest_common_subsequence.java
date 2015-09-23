public class Solution {
    /**
     * @param A, B: Two strings.
     * @return: The length of longest common subsequence of A and B.
     */
    public int longestCommonSubsequence(String A, String B) {
        //f[i][j] => A第i个字符结尾的字符串和B第j个字符结尾的字符串的LCS
        //f[i][j] = A[i]==B[j] ? f[i-1][j-1]+1 : max(f[i-1][j], f[i][j-1])
        //f[0][j] = 0 f[i][0] = 0
        //return max(f)
        int[][] f = new int[A.length() + 1][B.length() + 1];
        int max = 0;
        for(int i = 0; i < A.length() +1; i++){
            f[i][0] = 0;
        }
        for(int j = 1; j < B.length() +1; j++){
            f[0][j] = 0;
        }
        for(int i = 1; i < A.length() +1; i++){
            for(int j = 1; j < B.length() +1; j++){
                if(A.charAt(i-1) == B.charAt(j-1)){
                    f[i][j] = f[i-1][j-1] + 1;
                }else{
                    f[i][j] = Math.max(f[i-1][j], f[i][j-1]);
                }
                max = Math.max(max, f[i][j]);
            }
        }
        return max;   
    }
}

