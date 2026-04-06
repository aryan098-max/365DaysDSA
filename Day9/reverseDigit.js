    var reverse = function(x) {

        let xCopy = x;
        xCopy = Math.abs(xCopy);
        let reversedNum = 0;

        while(xCopy > 0){

            let lastDigit = xCopy % 10;
            reversedNum = (reversedNum * 10) + lastDigit;
            xCopy = Math.floor(xCopy/10);
        }

        // Corner case
        // upper limit is limit-1;
        let limit = Math.pow(2,31);

        if(reversedNum > limit-1 || reversedNum < -limit){
            return 0;
        }

        return (x<0) ? -reversedNum : reversedNum;
        
    };

    const x = 1534236469;
    const output = reverse(x);
    console.log(output);