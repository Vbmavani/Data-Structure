// //Time complexity = O(n^2)
var selectionSort = (arr) =>{
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]];
      }
    }
  }
  return arr;
}

var result =selectionSort([6,3,7,2,4,1,9,12,2,1,10]);
console.log(result);

  