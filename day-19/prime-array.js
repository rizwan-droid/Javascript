let num = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<num.length;i++){
    let nof = 0;

    for(let j=2;j*j<=num[i];j++){
        if(num[i]%j===0){
            nof++;
            break;
        }      
    }

    if(nof===0){
        console.log('number is prime', num[i]);
    }else{
        console.log('number is not prime',num[i]);
    }
}
