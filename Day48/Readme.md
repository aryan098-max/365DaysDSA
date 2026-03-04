# Get value at index

1. Call MyLinkedList.prototype.get = function(index){}

2. Corner case: index < 0 || index >=size, return -1

   Q. why index === size as well?
   = Because index starts from 0
   
3. The loop also goes before the actual index because from there we can 
   access the next index using:

   - for(let i=0; i<index; i++){}
   - currNode = currNode.next; (currNode has access to the actual node now)
   - return currNode.val;

============================================================================================

# Delete at index

1. There are two corner cases 

    1. Out of bound check similar to addAtIndex(); however, this time index>=size

        if(index<0 || index>= size){
            return
        }

    2. Second corner case is deleting at head

        // point to next node of head
        if(index === 0){
            this.head = this.head.next
        }

2. Here, also we are going to run the loop till index-1; same logic as addAtIndex
   currNode = currNode.next;

   After, reaching to desire index move the currNode.next to the next to next

   currNode.next = currNode.next.next
   
