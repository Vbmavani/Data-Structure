 //Time complexity = O(n^2)
 //best case =O(n)
 
 var bubbleSort=(arr)=>{
  for(i=0;i<arr.length-1;i++){
    for(j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}
var result = bubbleSort([1,4,2,7,8,1,1,9,12,5,1]);
console.log(result);  

  // var bubbleSort= (arr,n)=>{
  //   for(i=0;i<n-1;i++){     //we can use//for(i=0;i<n;i++) <--decrease time complexity     
  //     var flag = 0;
  //     for(j=0;j<n-i-1;j++){   //we can use//for(i=0;i<n;i++) <--decrease time complexity 
  //       if(arr[j]>arr[j+1]){
  //        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
  //        flag = 1;
  //       }
  //     }
  //     if(flag == 0){return arr;}   //decrease the time complexity //don't needed 
  //                                  //pass[1,2,3,4,5,6]  autamatically return array.it does't execute whole code 
  //   } 
  //   return arr;
  // }
  // sortedarr=bubbleSort(arr=[2,4,1,3,32,1,12],arr.length);
  // console.log(sortedarr);