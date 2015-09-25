public class Solution {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A & V: Given n items with size A[i] and value V[i]
     * @return: The maximum value
     */
    public int backPackII(int m, int[] A, int V[]) {
        //f[i][j]前i个在剩下j的空间里面最大value是多少
        //f[i][j] = A[i-1] > j? f[i-1][j] : Math.max(f[i-1][j], f[i-1][j-A[i-1]] + V[i-1])
        //f[i][0] = 0  f[0][j] = 0
        //return f[A.length][m]
        
        int[][] f = new int[A.length+1][m+1];
        for(int i = 0; i < A.length+1; i++){
            f[i][0] = 0;
        }
        for(int i = 0; i < m+1; i++){
            f[0][i] = 0;
        }
        for(int i = 1; i < A.length+1; i++){
            for(int j = 1; j < m+1; j++){
                if(A[i-1] > j){
                    f[i][j] = f[i-1][j];
                }else{
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-A[i-1]] + V[i-1]);
                }
            }
        }
        return f[A.length][m];
    }
}
