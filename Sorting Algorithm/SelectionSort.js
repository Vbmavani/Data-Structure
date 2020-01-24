//Time complexity = O(n^2)
  
var SelectionSort=(arr,n)=>{
  
    for(i=0;i<n-1;i++){
    var imin = i;
    for (j=i+1;j<n;j++){
      if(arr[imin]>arr[j]){
        imin =j;
      }
    }
    temp = arr[i];
    arr[i]=arr[imin];
    arr[imin]= temp; 
  }
  console.log(arr);
  }
  SelectionSort(arr=[19,8,6,25,3],arr.length);
  //  selectionSort(arr=['asdf','sdf','sdfr','yatsdfq','vadsfa'],arr.length)