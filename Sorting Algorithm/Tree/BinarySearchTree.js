class Node {
    constructor(data,left=null,right=null){
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  class BST{
    constructor(){
      this.root = null;
    }
    //Add element into the Binary Search Tree
    add(data){
      var node= this.root;
      if(node === null){
        this.root = new Node(data);
        return;
      }else{
        var searchTree=(node)=>{
          if(data<node.data){
            if(node.left === null){ 
              node.left = new Node(data);
              return;
            }else{
              return searchTree(node.left);
            }
          }else if(node.data < data){
            if(node.right === null){
              node.right = new Node(data);
              return;
            }else{
              return searchTree(node.right);
            }
          }else{
            return null;
          }
        }
         return searchTree(node);
      }
  
    }
    //Find Smallest element from tree
    findMin(){
      var node = this.root;
      if(node == null){ return null; }
      while(node.left){
        node=node.left;
      }
      return node.data;
    }
    //Find largest element from tree
    findMax(){
      var node = this.root;
      if(node===null){ return null; }
      while(node.right){
        node=node.right;
      }
      return node.data;
    }
    //Check the element is present or not
    isPresent(data){
      var current = this.root;
      
      while(current){
        if(data === current.data){   return true; }
        if(data<current.data){
          current = current.left;
        }else if(data > current.data){
          current = current.right;
        }
      }
      return false;
    }
  } 
  var bst = new BST;
  
  bst.add(8);
  
  bst.add(3);
  bst.add(10);
  bst.add(1);
  
  bst.add(6)
  bst.add(14);
  bst.add(4);
  bst.add(7);
  bst.add(13);
  console.log('Smallest element',bst.findMin());
  console.log('Largest element',bst.findMax());
  console.log('isPresent',bst.isPresent(14));
  console.log(bst);