const list = [1,5,89,2,66,4,7]

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  console.log('Mergesort left and right',left,right);
  var l = mergeSort(left);
  console.log('below  LLLL',l)
  var r =  mergeSort(right);
  console.log('below  RRRR',r)
  console.log('Mergesort LLLL RRRR',l,r);
  return merge(l,r);
}

const merge = (left, right) => {
  var result = [];
  console.log('MERGE',left,right)
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
  return result;
}

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]
