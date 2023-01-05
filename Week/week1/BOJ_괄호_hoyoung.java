import java.util.*;
import java.io.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int T = Integer.parseInt(st.nextToken()); // T���� �׽�Ʈ���̽�
		StringBuilder ans = new StringBuilder();
		
		for(int i = 0; i < T; i++) {
			Stack<Character> stack = new Stack();
			String temp = br.readLine();
			boolean isEmpty = false;
			for(int j = 0; j < temp.length(); j++) {
				if(temp.charAt(j) == '(') {
					stack.add('(');
				}
				else {
					if(stack.isEmpty()) { // ����ִµ� �� ���� ���� ������
						isEmpty = true;
						break;
					}
					stack.pop();
				}
			}
			if(!stack.isEmpty() || isEmpty) { // ������ �Ϸ��ϰ� �����ִ� ��ȣ�� �ְų� �Ҹ����� false�� ��� -> ����
				ans.append("NO \n");
			}
			else {
				ans.append("YES \n");
			}
		}
		
		System.out.println(ans.toString());
		
	}
}
