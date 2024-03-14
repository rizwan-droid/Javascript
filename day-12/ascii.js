let ch = 'A'.charCodeAt();
for(i=1; i<=5; i++){
    let ans="";
    for(j=1; j<=i; j++){
        ans+=String.fromCharCode(ch);
        ch+=1;
    }
    console.log(ans);
}