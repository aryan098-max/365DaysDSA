// # 160. Intersection of Two Linked Lists

var getIntersectionNode = function(headA, headB) {

     if(headA === null || headB === null){
        return null;
    }
    
    let pA = headA;
    let pB = headB;

    while(pA !== pB){

        if(pA === null){
            pA = headB;
        } else{
            pA = pA.next;
        }

        if(pB === null){
            pB = headA;
        } else{
            pB = pB.next;
        }
    }
    return pA;
    
};

