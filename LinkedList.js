class Node{
    constructor(data,next = null){
        this.data =data;
        this.next = next;
    }
  }
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0 ;
    }
  
    //Insert First
    insertFirst(data){
      this.head =new Node (data ,this.head);
      this.size++;
    }
  
    //Insert Last
    insertLast(data){
      let node =new Node(data);
      if(this.head ==null){
          this.head = node;
      }else{
        console.log('insert last beg',this.head);
        let current = this.head;
        while(current.next){
          current =current.next;
        }
        current.next =node;
        console.log('Insert Last End',this.head,'current',current)
      }
      
      this.size++;
    }
  
    //Print List Node 
    PrintNode(){
      let current = this.head;
      while(current){
        console.log(current.data);
        current=current.next;
      }
    }
  }
  
  const ll =new LinkedList();
  ll.insertFirst(100);
  ll.insertFirst(200);
  ll.insertFirst(300);
  ll.insertLast(400);
  
  ll.PrintNode()
  console.log(ll);
  
  
  