function binary(num,base){
    let p=1;
    let ans=0;
    while(num>0){
    let rem=num%base;
    num=Math.floor(num/base);
    ans+=rem*p;
    p*=base;
    }
    
}
binary(120,8);