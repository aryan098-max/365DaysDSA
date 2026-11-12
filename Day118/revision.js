// # 141. Linked List Cycle

var hasCycle = function(head) {

    let curr = head;
    let seenNode = new Set();

    while(curr !== null){

        if(seenNode.has(curr)){
            return true;
        }

        // move to the next node
        seenNode.add(curr);
        curr = curr.next;
    }  

    return false;
};