function prime(...args){
    for(const val of args){
        let nof=0;
        for(i=2;i*i<=val;i++){
            if(val%i==0){
                nof++;
                break;
            }
        }
        if(nof==0){
            console.log('number is prime', val);
        }else{
            console.log('number is not prime', val);
        }
    }
}
prime(1,2,3,4,5,6,7,8,9);