let a=0;
let b=1;
for(i=1;i<=4;i++){
   let ans="";
    for(j=1; j<=i; j++){
        ans=ans+a;
        let n=a+b;
        a=b;
        b=n;
    }
    console.log(ans);
}

// 0 1 1 2 3 5 8 13 21 34

/* a=0 -- b=1 -- 3rd no. a+b--- 4th no.  a=b b=3rd no.*/