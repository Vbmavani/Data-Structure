 //Time complexity = O(n^2)
 //best case =O(n)
 var swap = (ele1,ele2)=>{
    temp =ele1;
    ele1= ele2;
    ele2 = temp; 
    return ([ele1,ele2]);
  }
  
  var bubbleSort= (arr,n)=>{
    for(i=0;i<n-1;i++){     //we can use//for(i=0;i<n;i++) <--decrease time complexity     
      var flag = 0;
      for(j=0;j<n-i-1;j++){   //we can use//for(i=0;i<n;i++) <--decrease time complexity 
        if(arr[j]>arr[j+1]){
         [arr[j],arr[j+1]] = swap(arr[j],arr[j+1]);
         flag = 1;
        }
      }
      if(flag == 0){return arr;}   //decrease the time complexity //don't needed 
                                   //pass[1,2,3,4,5,6]  autamatically return array.it does't execute whole code 
    } 
    return arr;
  }
  sortedarr=bubbleSort(arr=[2,4,1,3,32,1,12],arr.length);
  console.log(sortedarr);
  
  
  // sortedarr=bubbleSort(arr=[2,4,1,,11,2,1,9,12],arr.length); // [2,4,1,undefined,11,2,1,9,12]
  //arr=sortedarr;
  // var arr2;
  // for(i=0;i<arr.length;i++){
  //   if(typeof(arr[i]) == 'undefined' ){
  //     arr2 = arr.splice(0,i);
  //     arr.splice(0,1);
  //     //break;
  //   }
  // }
  
  // console.log(arr,arr2)