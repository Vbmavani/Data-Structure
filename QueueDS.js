const arr =[];
const insert=()=>{
  var ele=prompt('Enter Element to add');
  arr.unshift(ele);  
}
const delet =()=>{
  arr.length >= 1 ? arr.pop()  : alert('Nothing to Delete')  ;
}
const show=()=>{
  arr.length >= 1 ? console.log(`Array:-${arr}`) : console.log('Empty Array');
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
      insert()
      break;
    case 2:
      delet()
      break;
    case 3:
      show()
      break;
    default :
    console.log('you have entered Wrong input');
  }
  i = Number(prompt('Do you want to continue?enter 1'));
}while(i==1);
//}while(confirm('do you want to Continue?'));
console.log(`Final Array ${arr} `)