import java.util.ArrayList;
import java.util.Scanner;

public class Sol1 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        for(int i= 0; i<N; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter the ele to be searched");
        int ele = sc.nextInt();
        boolean ans = present(arr, ele);

        System.out.println(ans);

        int avg = average(arr, N);
        System.out.println(avg);
    }

    static boolean present(int[] arr, int ele){
        boolean flag = false;
        for (int i : arr) {
            if(i == ele){
                flag = true;
            }
        }
        return flag;
    }

    static int average(int[] arr, int N){
        int ans = 0;
        for (int i : arr) {
            ans+= i;
        }
        return ans/N;
    }



}
