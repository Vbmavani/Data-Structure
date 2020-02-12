function quickSort(arr, left, right){
  var partitionIndex;
  if(left < right){
   partitionIndex = partition(arr, left, right);
   
  //sort left and right
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
  }
 return arr;
}
       

function partition(arr, left, right){
  var pivotValue = arr[right],
      partitionIndex = left;

  for(var i = left; i < right; i++){
   if(arr[i] < pivotValue){
     swap(arr, i, partitionIndex);
     partitionIndex++;
   }
 }
 swap(arr, right, partitionIndex);
 return partitionIndex;
}
       

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([11,8,14,3,6,2,7],0,6)); 