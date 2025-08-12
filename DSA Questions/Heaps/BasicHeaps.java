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


        System.out.println();
        System.out.println("Before MIN HEAP Deletion");
        printHeap(minHeap);
        System.out.println();
        System.out.println("After MIN HEAP Deletion");
        deleteFromMinHeap(minHeap);
        printHeap(minHeap);
    }
    static int getParent(int idx){
        if(idx == 1 || idx == 0){
            return 0;
        }
        if(idx % 2 != 0) return idx/2;
        return (idx/2)-1;
    }
    static int getLeft(int idx, ArrayList<Integer> arr){
        if(idx == 0){
            return 1;
        }
        if(arr.size()-1 < (idx * 2)+1){
            return idx;
        }
        return (idx * 2)+1;
    }
    static int getRight(int idx, ArrayList<Integer> arr){
        if(idx == 0){
            return 2;
        }
        if(arr.size()-1 < (idx * 2)+2){
            return idx;
        }
        return (idx*2)+2;
    }
    static void swap(ArrayList<Integer> arr, int idx1, int idx2){
        int temp = arr.get(idx1);
        arr.set(idx1, arr.get(idx2));
        arr.set(idx2, temp);
    }
    static void insertIntoMinHeap(ArrayList<Integer> arr, int val){
        System.out.println("Before Insertion: ");
        printHeap(arr);
        arr.add(val);
        int idx = arr.size()-1;
        System.out.println("AFter insertion" );
        while(arr.get(getParent(idx)) > arr.get(idx)){
            printHeap(arr);
            swap(arr, getParent(idx) , idx);
            idx = getParent(idx);
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
    static void deleteFromMinHeap(ArrayList<Integer> arr){
        int lastval = arr.remove(arr.size()-1);
        int currIdx = 0;
        arr.set(currIdx, lastval);
        while(arr.get(getLeft(currIdx, arr)) < arr.get(currIdx) || arr.get(getRight(currIdx, arr)) < arr.get(currIdx)){
            if(arr.get(getLeft(currIdx, arr)) > arr.get(getRight(currIdx, arr))){
                swap(arr, currIdx, getRight(currIdx, arr));
                currIdx = getRight(currIdx, arr);
            }else{
                swap(arr, currIdx, getLeft(currIdx, arr));
                currIdx = getLeft(currIdx, arr);
            }
        }
    }
}
