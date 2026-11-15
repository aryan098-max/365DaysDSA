// # 19. Remove Nth Node From End of List

var removeElements = function(head, n) {
    
    // creating a sentinel node
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let length = 0;
    while(head !== null){
        head = head.next;
        length++;
    }

    // Introduce prevPos and prev
    let prevPos = length - n;
    let prev = sentinel;

    // Run a loop to move prev to the prevPos
    for(let i=0; i<prevPos; i++){
        // move prev to prevPos
        prev = prev.next;
    }
    // finally remove the link to the Nth node
    prev.next = prev.next.next;

    // return sentinel.next to cover the head being Nth index
    return sentinel.next;

}