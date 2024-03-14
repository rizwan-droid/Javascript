// function --input number---print reverse number.

function reverseNumber(num){
    while(num>0){
        let ld=num%10;
        num=Math.floor(num/10);
        console.log(ld);
    }
}
reverseNumber(234567);