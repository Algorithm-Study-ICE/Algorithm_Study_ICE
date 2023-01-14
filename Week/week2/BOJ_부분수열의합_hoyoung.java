import java.util.*;
import java.io.*;

public class Main {
	
	static ArrayList<Integer> nums = new ArrayList<>();
	static int N, S;
	static int count;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		S = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		for(int i = 0 ; i < N; i++) {
			nums.add(Integer.parseInt(st.nextToken()));
		}
		
		// Ȥ�� �𸣴ϱ� ����
		Collections.sort(nums);
		
		partialSum(nums.get(0), 1);

		System.out.println(count);
		
		
	}
	public static void partialSum(int sum, int index) {
		
		
		// �������� 1. �κ� ������ ���� N �� ���ٸ� count �� 1 ���Ѵ�.
		if(S == sum) { 
			count ++;
		}
		
		// �������� 2. �ε����� ����ٸ� �����Ѵ�.
		if(index >= N) {
			return;
		}			

		// case1. ���� �ε����� ��� ���ذ��� ���
		partialSum(sum + nums.get(index), index + 1);
		// case2. ���� �ε����� ���� ���� �ε����� ���ϴ� ���
		partialSum(sum - nums.get(index - 1) + nums.get(index), index + 1);
		
	}
}
