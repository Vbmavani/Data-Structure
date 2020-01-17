const arr =[1,4,7,9,12,43,57,89];
var BinarySearch =(ele)=>{
    if(ele<arr[0] || arr[(arr.length-1)] < ele){
        console.log('element is not present in the list');
        return;
    }
    var l,mid,r;
    l=0;
    r=arr.length -1;
    
    for(i=0;i<arr.length;i++){
        mid =Math.floor((l+r+1)/2);
        //console.log('left,mid,right',l,mid,r);
        if(arr[mid] == ele){
            console.log('element present at index',mid);
            return;
        }
        else if(ele < arr[mid]){
            r = mid -1;
        }
        else if(arr[mid] < ele){
            l = mid +1;
        }
        if(l > r){
            console.log('element is not present in the list');
            return;
        }
    }
}

BinarySearch(57);
// BinarySearch(0);
//BinarySearch(167);

//BinarySearch(11);
