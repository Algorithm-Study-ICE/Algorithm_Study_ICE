import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int n, l, r;
	static int [][] population;
	static boolean [][] visit;
	static int dict [][] = {{1,0}, {0,1}, {-1,0}, {0,-1}};
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		n = Integer.parseInt(st.nextToken());
		l = Integer.parseInt(st.nextToken());
		r = Integer.parseInt(st.nextToken());
		
		population = new int [n][n];
		
		for(int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine());
			
			for(int j = 0; j <n ; j++) {
				population[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		int answer = 0;
		while(true) {
			visit = new boolean [n][n];
			for(int i = 0; i < n; i++) {
				for(int j = 0; j < n; j++) {
					movePopulation(i, j);
				}
			}
			
			if(checkVisit()) {
				answer++;
			}
			else {
				break;
			}
		}
		
		System.out.println(answer);		
		
	}
	
	static boolean checkVisit() {
		for(int i = 0; i <n; i++) {
			for(int j = 0; j < n; j++) {
				if(visit[i][j]) return true; 
			}
		}
		return false;
	}
	static void movePopulation(int x, int y) {		
		
		Queue<int []> que = new LinkedList<>();
		ArrayList<int []> visited = new ArrayList<>();
		
		que.add(new int [] {x, y});
		visit[x][y] = true;
		
		while(!que.isEmpty()) {
			int [] xy = que.poll();
			
			int tempX = xy[0];
			int tempY = xy[1];
			
			for(int i = 0; i < 4; i++) {
				int addX = tempX + dict[i][0];
				int addY = tempY + dict[i][1];
				
				if(isOut(addX, addY) && !visit[addX][addY]) {
					int sub = Math.abs(population[tempX][tempY] - population[addX][addY]);
					if(sub >= l && sub <= r) {
						que.add(new int [] { addX, addY });
						visited.add(new int [] {addX, addY});
						visit[addX][addY] = true;
					}
				}
			}
		}
		
		avgPopulation(visited);
	}
	
	static void avgPopulation(ArrayList<int []> visited) {
		int sum = 0;
		int size = visited.size();
		for(int i = 0; i < size; i++) {
			sum += population[visited.get(i)[0]][visited.get(i)[1]];
		}
		
		for(int i = 0; i <size; i++) {
			population[visited.get(i)[0]][visited.get(i)[1]] = sum / size;
		}
	}
	
	static boolean isOut(int x, int y) {
		return x >= 0 && x < n && y >= 0 && y < n ;
	}
}