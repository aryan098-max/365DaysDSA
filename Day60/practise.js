var hasCycle = function(head) {
    
    // base case
    if(head === null || head.next === null){
        return false;
    }

    let slow = head;
    let fast = head.next;

    while(slow !== fast){

        if(fast === null || fast.next === null){
            return false;
        }

        fast = fast.next.next;
        slow = slow.next;        
    }
    return true;
};