const collection =[];
const enqueue=()=>{
  var ele=prompt('Enter Element to add');
  collection.push(ele);  
}
const dequeue =()=>{
  collection.length >= 1 ? collection.shift()  : alert('Nothing to Delete')  ;
}
const display=()=>{
  collection.length >= 1 ? console.log(`Array:-${collection}`) : console.log('Empty Array');
}
var i =1
do{
  let ope =Number(prompt(`
  1) Insert
  2) Delete
  3) Display
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
  i = Number(prompt('Do you want to continue?enter 1  otherwise press 0'));
}while(i==1);
//}while(confirm('do you want to Continue?'));
console.log(`Final Array ${collection} `)