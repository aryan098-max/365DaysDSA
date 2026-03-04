# Adding Node at the head

1. Adding Node at the head

2. Using the prototype inheritance model feature 

    For example, 

    function Intro(fname){
        this.fname = fname;
    }

    Intro.prototype.sayHello = function(otherName){
        console.log(`hi ${otherName} I am ${this.fname}`)
    }

    const user = new Intro("Aryan");
    user.sayHello("Sandeep");

    Similarly, when obj1.addAtHead(val) calls MyLinkedList.prototype.addAtHead
    this in this function is obj1, the obj before the dot is the obj. 

3. While, adding a new node at the head, we must create a new node first using
   function Node() and change the value of head to newNode and make sure that 
   newNode.next = head. It means that the new node is pointing to forward Node

4. Finally, increase the size of the linked list

====================================================================================

# Adding node at the tail

1. We are going to call MyLinkedList.prototype.addAtTail(val) = function (){}

# Note: There is an edge case we need to handle here what if the node we are adding 
#  is the first node and in this case our this.head = null, instead of this.head = node

- Introduce a if condition for checking that and directly assign the new node to this.head = newNode

    if(this.head === null){
        this.head = newNode;
    }

2. Here, we are have to traverse the linked list until we found a node that is
   pointing towards null because we are going to make sure that the last node 
   point towards the new node now.

   Note: Use while for looping the entire linkedList 

3. For, traversing the list we need to introduce a variable which points to the
   head of the node.

   Therefore, let currNode = this.head;

4. However, the newly added node at the tail must point to null now. This is done while
   creating the new node. Thereofre, we don't have to do it.

5. Finally, increase the size of the linked list

====================================================================================

# Adding a node at the index

1. We are going to call MyLinkedList.prototype.addAtIndex(val) = function{}

2. There are two edge cases 
    1. index === 0
    2. index === size

    1. if (index === 0) this.addAtHead(val), return; why this because this is pointing to curr obj
    2. if (index === size) this.addAtTail(val), return; also add return

3. Finally, the real logic is introduce a varibale: 
    1. let currNode = this.head
    2. Run a loop till index-1 but this is actually index-2 because if I want to add at 2 I have to 
       add between 1 and 2 but I have to stop the loop at 0 because I can reach to 1 using the logic 
       currNode = currNode.next;
    
    So, basically, here I can reach to index 2 from index 0; therefore, if I want to add at index 2 
    I need to run the loop only 1 time which is reach at zero index and access index 1

4. After reaching the index we need to make sure that newly added node presents to the next node using
   the help of currNode 

    - currNode is pointing to 1st index, I want to add between 1 and 2;
    - newNode.next = currNode.next (currNode.next is pointing two 2nd index)
    - currNode.next = newNode

5. Finally, increase the size of the linked list
