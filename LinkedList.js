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
  
    //------------------>Insert First<------------------
    insertFirst(data){
      this.head =new Node (data ,this.head);
      this.size++;
    }
  
    //------------------>Insert Last<------------------
    insertLast(data){
      let node =new Node(data);
      if(this.head ==null){
          this.head = node;
      }else{
      //  console.log('insert last beg',this.head);
        let current = this.head;
        while(current.next){
          current =current.next;
        }
        current.next =node;
      //  console.log('Insert Last End',this.head,'current',current)
      }
      
      this.size++;
    }
  
    //------------------>Insert At Index<------------------
    insertAt(data,index){
     //if index is not valid
     if(index<0 || index>this.size){
       return;
     }
     //index is of first position
     if(index == 0){
       insertFirst(data);
       return;
     }
    //add node to current index
     const node = new Node(data);
     let prev , current ;
     current = this.head;
     let count =0;
      //console.log('this.head',this.head,'prev',prev,'current',current);
     while(count <index){
       prev = current ;
       current = current.next;
       count++;     
     }
     node.next = current;
     prev.next =node;
     //console.log('this.head',this.head,'prev',prev,'current',current);
    }
    
    //------------------>Remove at index<------------------
    removeAt(index){
      let current,prev;
      current =this.head;
      //console.log('removeat-current beg',current);
      let count = 0;
      if(index<0 || index >this.size){
        return;
      }
      if(index==0){
        this.head=current.next;
      }else{
        while(count <index){
          prev = current;
          count++;
          current = current.next;
      }
     // console.log('removeat-current end',current,'-prev',prev);
      prev.next = current.next;
      }
      
      this.size--;
    }
  
    //------------------>get at index<------------------
    getAt(index){
      let current =this.head;
      let count =0;
      while(current){
        if(count == index){
            console.log('getinddexdata',current.data);
          return;
        }
        count ++;
        current =current.next;
      }
    }
    //------------------> Clear list<------------------
    clearList() {
        this.head = null;
        this.size = 0;
    }
    //------------------>Print List Node <------------------
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
  //ll.insertAt(122,2);
  ll.removeAt(3)
  ll.clearList();
  ll.getAt(0);
  ll.PrintNode()
  console.log(ll);
  