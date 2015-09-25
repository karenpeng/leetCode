public class Solution {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
                    //backpacksize //size
    public int backPack(int m, int[] A) {
        //f[i][j]表示 前i个物品跟剩下j大的空间 最多塞多少东西
        //这个竟然跟字符串一样不是zero index!!!!
        //f[i][j] =  A[i-1] < j ? Math.max(f[i-1][j-A[i-1]]+A[i-1], f[i-1][j]) : f[i-1][j]
        //f[0][j] = 0   f[i][0] = 0
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
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-A[i-1]] + A[i-1]);
                }
            }
        }
        return f[A.length][m];
    }
}
