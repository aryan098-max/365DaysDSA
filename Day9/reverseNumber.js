// Number
function reverseNumber(value){

    // Negative number always -121 = 121- (- at the end)
    if(value<0){
        return false;
    }

    let replicatedValue = value;
    let reverseNumber = 0

    while(replicatedValue>0){

        let lastDigit = replicatedValue%10;
        reverseNumber = (reverseNumber * 10) + lastDigit;
        replicatedValue = Math.floor(replicatedValue/10);
    }
      
    return reverseNumber;
}


// Array
function reverseNumberA(arr){

    const tempArray = [];

    for(let i=arr.length-1; i>=0; i--){
        tempArray.push(arr[i]);
    }
    
    return tempArray.join("");
}


// Number
const value = 1234
const rNumber = reverseNumber(value)
console.log(rNumber);


// Array
const arr = ["1", "2", "3", "4"];
const reversedNumber = reverseNumberA(arr);
console.log(reversedNumber);


