const arr =[];
const push=()=>{
  var ele=prompt('Enter Element to add');
  arr.push(ele);  
}
const pop =()=>{
  arr.length >= 1 ? arr.pop()  : alert('Nothing to Delete')  ;
}
const display=()=>{
  arr.length >= 1 ? console.log(`Array:-${arr}`) : console.log('Empty Array');
}
var i =1
do{
  let ope =Number(prompt(`
  1) push
  2) pop
  3) Display
  Enter a number you want to perform operation
  `));
  switch(ope){
    case 1 : 
      push()
      break;
    case 2:
      pop()
      break;
    case 3:
      display()
      break;
    default :
    console.log('you have entered Wrong input');
  }
  i = Number(prompt('Do you want to continue?enter 1 otherwise press 0'));
}while(i==1);
//}while(confirm('do you want to Continue?'));
console.log(`Final Array ${arr} `)