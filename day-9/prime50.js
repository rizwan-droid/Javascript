for(let num=1; num<=50; num++){
    nof=0;
for(i=2; i*i<=num; i++){
    if(num%i==0){
        nof+=1;
        break;
    }
}if(nof==0){
    console.log("prime",num);
}else{
    console.log("not prime",num);
}
}
