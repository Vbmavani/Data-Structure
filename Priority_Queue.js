const collection =[];
const enqueue=()=>{
  var ele=prompt('Enter Element to add');
  var prr=prompt('Enter Priority Of Queue');
  var ele =[ele,prr];
  if(collection.length == 0){
    collection.push(ele)
  }
  else{
      var added = false ;
      for(i=0;i<collection.length;i++){
        if(ele[1] < collection[i][1]){ 
           collection.splice(i,0,ele)
            added= true;
            break;
        }
      }
      if(!added){
        collection.push(ele);
      }
  } 
}
const dequeue =()=>{
  collection.length >= 1 ? collection.shift()  : alert('Nothing to Delete')  ;
}
const display=()=>{
  collection.length >= 1 ? console.log('Array:- ',collection) : console.log('Empty Array');
}
var i =1
do{
  let ope =Number(prompt(`
  1) Insert
  2) Delete
  3) Show
  Enter a number you want to perform operation
  `));
  switch(ope){
    case 1 : 
    enqueue()
      break;
    case 2:
      dequeue()
      break;
    case 3:
      display()
      break;
    default :
    console.log('you have entered Wrong input');
  }
  i = Number(prompt('Do you want to continue?enter 1'));
}while(i==1);
//}while(confirm('do you want to Continue?'));
console.log('Final Array  ',collection)