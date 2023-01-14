import java.util.*;
import java.io.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		long ans = 0;
		
		// 1 ����, 2 ����, 3 ����, 4 ����, 5 ����
		int finger = Integer.parseInt(st.nextToken());
		// ��ģ �հ������� �� �� �ִ� �ִ� Ƚ��
		int finger_count = Integer.parseInt(br.readLine());
		
		while(true) {
			// �ѹ��� ���鼭 �ѹ� �����Ǵ� �հ��� 1, 5
			if(finger == 1) {
				finger_count --;
				if(isExit(finger_count)) { // �����Ѵ�.
					break;
				}
				// 1, 2, 3, 4, 5, 4, 3, 2 -> 8�� �� �� �� �ִ�.
				ans += 8;
			}
			else if(finger == 5) {
				// 1, 2, 3, 4 �� ���� �´�
				ans += 4;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 5, 4, 3, 2 -> 4�� �� ���� �ִ�. ������ 1, 2, 3, 4�� �����߱⿡ ����
				ans += 4;
				
			} // ������ ���̽� ���
			else if (finger == 2) {
				// 1�� ���� ����.
				ans += 1;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 2, 3, 4, 5, 4, 3, -> 6��
				ans += 6;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 2 �հ����� �ѹ� ���Ѵ�.
				ans += 1;
			}
			else if (finger == 3) {
				// 1,2 �� ���� ����.
				ans += 2;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 3, 4, 5, 4 -> 4��
				ans += 4;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 3, 2�� �д�.
				ans += 2;
			}
			else {
				// 1, 2, 3�� ���� �д�.
				ans += 3;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 4, 5 -> 2��
				ans += 2;
				finger_count--;
				if(isExit(finger_count)) {
					break;
				}
				// 4, 3, 2�� �д�
				ans += 3;
				
			}
			
		}	
		
		System.out.println(ans);
	}
	
	public static boolean isExit(int count) {
		return count < 0;
	}
}
