function ListNode(val, next){

    this.val  = (val === undefined ? 0: val);
    this.next = (next === undefined ? null: next);
}

var deleteDuplicates = function(head) {

    let curr = head;
    
    while(curr !== null && curr.next !== null){

        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};

// creating nodes

const node4 = new ListNode(4, null);
const nodefour = new ListNode(4, node4);
const node3 = new ListNode(3, nodefour);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

// Calling the deleteDuplicates
let uniqueList = deleteDuplicates(head);
console.log(uniqueList);

// Printing the uniqueList 

const values = [];
let temp = uniqueList;

while(temp !== null){

    // pushing values into the array
    values.push(temp.val);

    // moving forward the temp
    temp = temp.next;
}

console.log(values.join(" -> "))