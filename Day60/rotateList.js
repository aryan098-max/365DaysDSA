var rotateRight = function(head, k) {

    // handle the base case of 0 linked list
    if(head === null || head.next === null){
        return head;
    }

    // Now, finding the length of the list for calculating k
    let curr = head;
    let length = 0;
    while(curr !== null){
        curr = curr.next;
        length++;
    }

    // Making k as k%length therefore, it will remove unnecessary rotation
    k = k % length;

    // After finding the length use two pointers slow and fast
    // slow starts form head but k starts from 
    let slow = head;
    let fast = head;

    for(let i=0; i<k; i++){
        fast = fast.next;
    }
    
    // Now, moving slow to the kth position and fast to the end
    // Moving fast last position because we want to point f.next = head;
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }

    // connecting last node to the head
    fast.next = head;

    // creating a new head using the position of slow & making slow null
    let newHead = slow.next;
    slow.next = null;

    return newHead;
};