const arr =[1,2,3,4,5,6,7];
var LinearSearch = (ele)=>{
  for(i=0;i<arr.length ;i++){
    if(arr[i] == ele){
      console.log('element Present at index',i);
      break;
    }
    if(i == (arr.length-1)){
      console.log('element not present in array');
    }
  }
}
LinearSearch(5);
//LinearSearch(34);

//Time Complexity
/*
Best Case - O(1)
Worst case - O(n)
average -(n+1)/2 */