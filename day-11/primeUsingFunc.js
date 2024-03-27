function prime(ll,ul) {
    for(i=ll; i<=ul; i++){
        let nof=0;
        for(j=2; j*j<=i; j++){
            if(i%j==0){
                nof+=1;
                break;
            }
        }
        if(nof==0){
            console.log("number is prime", i);
        }else{
            console.log("number is not prime", i)
        }
    }
}
prime(1,10);