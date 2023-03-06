import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		Node root = new Node(Integer.parseInt(br.readLine()));
		
		while(true) {
			try {
				int temp = Integer.parseInt(br.readLine());
				root.insertNode(temp);
			}
			catch (NumberFormatException e){
				break;
			}
			
		}
		
		postOrder(root);
		
	}
	
	static void postOrder(Node node) {
		
		if(node == null) return;
		
		postOrder(node.left);
		postOrder(node.right);
		System.out.println(node.data);
		
	}
}

class Node {
	int data;
	Node left;
	Node right;
	
	public Node(int num) {
		this.data = num;
	}
	
	void insertNode(int num) {
		if(this.data > num) {
			if(this.left == null) {
				this.left = new Node(num);
			}
			else {
				this.left.insertNode(num);
			}
		}
		else {
			if(this.right == null) {
				this.right = new Node(num);			
			}
			else {
				this.right.insertNode(num);
			}
		}
	}
}
