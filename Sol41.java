
public class Sol41 {
    public static void main(String[] args) {
        int N = 5;
        int res = fact(5);
        System.out.println(res);
    }
    static int fact(int N){
        if(N <= 1){
            return 1;
        } 
        return N * fact(N-1);
    }
}
