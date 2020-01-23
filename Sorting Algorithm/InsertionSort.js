//Time complexity = O(n^2)
//best case = O(n)
var InsertionSort =(arr,n) =>{
    for (i=1;i<n;i++){
     var value = arr[i];
     var hole = i;
     while(hole > 0 && arr[hole-1]>value){
       arr[hole] = arr[hole-1];
       hole--;
     }
     arr[hole] = value;
    }
    return arr;
  }
  
  var sortedarr = InsertionSort(arr=[1,5,3,4,2],arr.length);
  console.log(sortedarr);
  