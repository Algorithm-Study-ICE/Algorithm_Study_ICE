import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		int [][] bag = new int [n+1][2];
		for(int i = 1; i <= n; i++) {
			st = new StringTokenizer(br.readLine());
			
			bag[i][0] = Integer.parseInt(st.nextToken()); // 가방 무게
			bag[i][1] = Integer.parseInt(st.nextToken()); // 가방 가치
		}
		
		int dp [][] = new int [n+1][k+1];
		
		for(int i = 1; i <= k; i++) {
			for(int j = 1; j <= n; j++) {
				dp[j][i] = dp[j-1][i];
				if(i - bag[j][0] >= 0) {
					dp[j][i] = Math.max(dp[j-1][i], bag[j][1] + dp[j-1][i-bag[j][0]]);
				}
			}
		}
		
		System.out.println(dp[n][k]);
		
		
	}
}