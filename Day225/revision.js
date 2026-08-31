var guessNumber = function(n) {

    let left = 0;
    let right = n;
    
    while(left<=right){

        let middle = left + Math.floor((right-left)/2);
        let num = guess(middle);

        if(num === 0){
            return middle;
        } 
        else if(num < 0){
            right = middle-1;
        }
        else{
            left = middle + 1;
        }
    }
};