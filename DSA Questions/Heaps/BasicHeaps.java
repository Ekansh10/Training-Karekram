import java.util.ArrayList;

public class BasicHeaps {
    public static void main(String[] args) {
        ArrayList<Integer> minHeap = new ArrayList<>();
        ArrayList<Integer> maxHeap = new ArrayList<>();

        System.out.println("MIN HEAP");
        insertIntoMinHeap(minHeap, 8);
        printHeap(minHeap);
        insertIntoMinHeap(minHeap, 7);
        printHeap(minHeap);
        insertIntoMinHeap(minHeap, 9);
        insertIntoMinHeap(minHeap, 10);
        insertIntoMinHeap(minHeap, 11);
        insertIntoMinHeap(minHeap, 12);
        insertIntoMinHeap(minHeap, 14);
        insertIntoMinHeap(minHeap, 13);
        printHeap(minHeap);
        insertIntoMinHeap(minHeap, 5);
        printHeap(minHeap);

        System.out.println("MAX HEAP");
        insertIntoMaxHeap(maxHeap, 8);
        printHeap(maxHeap);
        insertIntoMaxHeap(maxHeap, 7);
        printHeap(maxHeap);
        insertIntoMaxHeap(maxHeap, 9);
        insertIntoMaxHeap(maxHeap, 10);
        insertIntoMaxHeap(maxHeap, 11);
        insertIntoMaxHeap(maxHeap, 12);
        insertIntoMaxHeap(maxHeap, 14);
        insertIntoMaxHeap(maxHeap, 13);
        printHeap(maxHeap);
        insertIntoMaxHeap(maxHeap, 5);
        printHeap(maxHeap);

    }
    static int getParent(int idx){
        if(idx == 1 || idx == 0){
            return 0;
        }
        return (idx/2)-1;
    }
    static int getLeft(ArrayList<Integer> arr, int idx){
        if(idx == 0){
            return arr.get(1);
        }
        return arr.get((idx * 2)+1);
    }
    static int getRight(ArrayList<Integer> arr, int idx){
        if(idx == 0){
            return arr.get(2);
        }
        return arr.get((idx*2)+2);
    }
    static void swap(ArrayList<Integer> arr, int idx1, int idx2){
        int temp = arr.get(idx1);
        arr.set(idx1, arr.get(idx2));
        arr.set(idx2, temp);
    }
    static void insertIntoMinHeap(ArrayList<Integer> arr, int val){
        if(arr.isEmpty()){
            arr.add(val);
        }else{
            arr.add(val);
            int idx = arr.size()-1;
            while(arr.get(getParent(idx)) > arr.get(idx)){
                swap(arr, getParent(idx) , idx);
                idx = getParent(idx);
            }
        }
        
    }
    static void insertIntoMaxHeap(ArrayList<Integer> arr, int val){
        arr.add(val);
        int idx = arr.size()-1;
        while(arr.get(getParent(idx)) < arr.get(idx)){
            swap(arr, getParent(idx) , idx);
            idx = getParent(idx);
        }
    }
    static void printHeap(ArrayList<Integer> heap){
        for(int ele : heap){
            System.out.print(ele + " ");
        }
        System.out.println();
    }
}
