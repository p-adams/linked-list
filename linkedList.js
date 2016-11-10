// count -> returns number of times an element occurs in the list
// getNth -> returns element at nth position
// deleteList -> deletes entire list 
// pop -> removes element from head of list, for fun popFromBack
// insertNth -> add element at nth position
// sortedInsert -> insert element in correct sorted position in list
// insertSort -> rearrange nodes so they are in sorted order using sortedInsert
// append -> takes two lists (a & b) and appends b onto a and sets b to null
// removeDuplicates -> takes sorted list and deletes any duplicate node
// reverse -> takes a list and reverses it
// removeNth -> remove element at nth position

// Node constructor
function Node(data) {
    this.data = data
    this.next = null;
}

// List constructor
function List (){
    this.head = null;
}

/* 

function ListB(){
    this.head = null
}


ListB.prototype.print = function(){
    console.log("---list contains---")
    this.head!=null ? this.head.print(this.head) : null
}

ListB.prototype.sortedInsert = function(element){
    var node = new Node(element)
    if(!this.head) this.head = new Node(element)
    else this.head = this.head.sortedInsert(this.head, node)
}

var mammals = ["cheetah", "wolf", "black bear"]

for(var i = 0; i < mammals.length; i++){
    list.sortedInsert(mammals[i])
}

var reptiles = ["python", "beared dragon", "gila monster"]
for(var i = 0; i < reptiles.length; i++){
    listB.sortedInsert(reptiles[i])
}

 */




/* Node functions */
Node.prototype.size = function(head){
    if(head.next==null)return 1
    else return 1 + this.size(head.next)
}

Node.prototype.print = function(head){
    if(head){
        console.log(head.data)
        this.print(head.next)
    }
}

Node.prototype.reversePrint = function(head){
    if(head===null)return
    this.reversePrint(head.next)
    console.log(head.data)
}
Node.prototype.count = function(head, el){
    if(!head) return 0
    if(head.data===el){
        return 1 + this.count(head.next, el)
    }
    else{
        return this.count(head.next, el)
    }
}

Node.prototype.getNth = function(head, index, start){
    if(head === null) return 0
    if(start === index){
       return head.data
   }
   else{
       start+=1
       return this.getNth(head.next, index, start)
    }
}

Node.prototype.insertNth = function(head, index, data){
    if(index===0){
        var node = new Node(data, head)
        node.next = head
        return node
   }
   head.next = this.insertNth(head.next, index-1, data)
   return head
}

Node.prototype.popFromBack = function(head){
    if(head.next===null){
        head = null
        return head
    }
   head.next = this.popFromBack(head.next)
   return head
}

Node.prototype.sortedInsert = function(head, node){
    if(head===null || head.data >= node.data){
        node.next = head
        head = node
        return head
    }
    head.next = this.sortedInsert(head.next, node)
    return head
}

Node.prototype.insertSort = function(head){
    if(head===null||head.next===null){
        return head
    }
    if(head.data > head.next.data){
        head = this.sortedInsert(head.next, head)
    }
    head.next = this.insertSort(head.next)
    
    return head
}

Node.prototype.append = function(headA, headB){
    let result = new Node(null)
    if(headA === null) return headB
    else if (headB === null) return headA
    if(headA.data <= headB.data){
        result = headA
        result.next = this.append(headA.next, headB)
    }
    else{
        result = headB
        result.next = this.append(headA, headB.next)
    }
    return result
}

Node.prototype.removeDuplicates = function(head){

    if(!head)return
    else{
        if(head.next){
            if(head.data===head.next.data){
                let next = head.next.next
                head.next = next
                this.removeDuplicates(head)
                return head
            }
            else{
                head = head.next
                this.removeDuplicates(head)
                return head
            }
        }
    }
}

Node.prototype.reverse = function(head){
   if(head === null || head.next === null) return head
   let remaining = this.reverse(head.next)
   head.next.next = head
   head.next = null
   return remaining
}

Node.prototype.removeNth = function(head, index){
    if(index===0){
        head = head.next
        return head
    }
    head.next = this.removeNth(head.next, index-1)
    return head
}




/* List functions */

List.prototype.size = function(){
  if(!this.head)return 0
  return this.head.size(this.head)
}

List.prototype.print = function(){
    console.log("---list contains---")
    this.head!=null ? this.head.print(this.head) : null
}

List.prototype.reversePrint = function(){
    this.head = this.head.reversePrint(this.head)
}


List.prototype.addFront = function(data){
    if(!this.head) this.head = new Node(data, null)
    else{
        var node = new Node(data, this.head)
        node.next = this.head;
        this.head = node
    }
}

List.prototype.count = function(el){
    if(this.head){
        return this.head.count(this.head, el)
    }
}

List.prototype.getNth = function(index){
    var start = 0
    if(this.head!=null){
        return this.head.getNth(this.head, index, start)
    }
}

List.prototype.deleteList = function(){
    this.head = null
    console.log("list deleted")
}

List.prototype.popFromFront = function(){
    console.log("popping " + this.head.data + " from front")
    this.head!=null ? this.head = this.head.next : null
}

List.prototype.popFromBack = function(){
    this.head!=null ? this.head = this.head.popFromBack(this.head) : null
}

List.prototype.insertNth = function(index, data){
   this.head = this.head.insertNth(this.head, index, data)
}

List.prototype.sortedInsert = function(element){
    var node = new Node(element)
    if(!this.head) this.head = new Node(element)
    else this.head = this.head.sortedInsert(this.head, node)
}

List.prototype.insertSort = function(){
    this.head = this.head.insertSort(this.head)
}

List.prototype.append = function(otherListHead){
   this.head = this.head.append(this.head, otherListHead.head)
}

List.prototype.removeDuplicates = function(){
   this.head = this.head.removeDuplicates(this.head)
}

List.prototype.reverse = function(){
    this.head = this.head.reverse(this.head)
}

List.prototype.removeNth = function(index){
    this.head = this.head.removeNth(this.head, index)
}

list = new List();
//listB = new ListB();

list.addFront("snake")
list.addFront("cat")
list.addFront("ape")
list.print()
list.removeNth(1)
list.print()



