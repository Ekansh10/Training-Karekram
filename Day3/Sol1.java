package Day3;

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

        boolean bsans = presentBS(arr, ele);
        System.out.println(bsans);
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

    static boolean presentBS(int[] arr, int tar){
        boolean res = false;

        int r = arr.length;
        int l = 0;
        int mid = l +((l+r) / 2);

        while(l <= r){
            if(arr[mid] == tar){
                res = true;
                break;
            }
            else if(arr[mid] > tar){
                r = mid -1;
                
            }
            else{
                l = mid + 1;
            }
            mid = l +((l+r) / 2);
        }
        return res;
    }

}
