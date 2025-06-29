import java.util.Scanner;
import java.util.Stack;

public class Sol51 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number to be converted to binary: ");
        int n = sc.nextInt();
        String s = "";

        binaryConversion(n, s);

        System.out.println("\n---NEW QUESTION---");
        String exp = "25+18-3+2-14";
        int ans = resolveExp(exp);
        System.out.println(ans);
    }

    static void binaryConversion(int n, String s){
        if(s.length() == n){
            System.out.println(s);
            return;
        }

        binaryConversion(n, s+"0");
        binaryConversion(n, s+"1");
    }

    static void binaryConversion2(int n){ // iterative approach 
        int[] arr = new int[n];
        for(int i = 0;i <n; i++){
            arr[i] = 0;
        }

        
    }

    static int resolveExp(String s){
        Stack<Integer> numst = new Stack<>();
        Stack<Character> opst = new Stack<>();
        String tmpNum = "";
        int globalNum = 0;
        for(int i =0; i<s.length(); i++){
            if(s.charAt(i) == '+' || s.charAt(i) == '-'){
                int num = Integer.parseInt(tmpNum);
                tmpNum = "";

                numst.push(num);

                if(opst.isEmpty()){
                    opst.push(s.charAt(i));
                }else{
                    int num2 = numst.pop();
                    int num1 = numst.pop();
                    char op = opst.pop();
                    globalNum = solve(num1, num2, op);
                    numst.push(globalNum);
                    opst.push(s.charAt(i));
                }

            }else{
                tmpNum = tmpNum+s.charAt(i);
            }
        }
        int num2 = Integer.parseInt(tmpNum);
        int num1 = numst.pop();
        char op = opst.pop();
        globalNum = solve(num1, num2, op);
        return globalNum;
    }

    static int solve(int num1, int num2, char op){
        if(op == '+'){
            return num1 + num2;
        }
        else{
            return num1 - num2;
        }
    }
}
