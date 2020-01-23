var swap = (ele1,ele2)=>{
    temp =ele1;
    ele1= ele2;
    ele2 = temp; 
    return ([ele1,ele2]);
  }
  
  var bubbleSort= (arr,n)=>{
    for(i=0;i<n;i++){
      for(j=0;j<n;j++){
        if(arr[j]>arr[j+1]){
         [arr[j],arr[j+1]] = swap(arr[j],arr[j+1]);
        }
      }
    }
    return arr;
  }
  arr=bubbleSort(arr=[2,4,1,3,32,1,12],arr.length);
  console.log(arr);
  
  
  // arr=bubbleSort(arr=[2,4,1,,11,2,1,9,12],arr.length); // [2,4,1,undefined,11,2,1,9,12]
  // var arr2;
  // for(i=0;i<arr.length;i++){
  //   if(typeof(arr[i]) == 'undefined' ){
  //     arr2 = arr.splice(0,i);
  //     arr.splice(0,1);
  //     //break;
  //   }
  // }
  
  // console.log(arr,arr2)