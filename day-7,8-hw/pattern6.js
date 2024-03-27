let nst=1;
let nsp=4;
for(i=1; i<=5; i++){
    for(let sp=1;sp<=nsp; sp++){
        process.stdout.write(" ");
    }for(let st=1; st<=nst; st++){
        process.stdout.write("*");
    }
   console.log();
   nsp=nsp-1;
   nst=nst+1;
}
let nr=4;
let ns=1;
for(j=1; j<=4; j++){
    for(let s=1;s<=ns; s++){
        process.stdout.write(" ");
    }for(let r=1; r<=nr; r++){
        process.stdout.write("*");
    }
   console.log();
   ns=ns+1;
   nr=nr-1;
}