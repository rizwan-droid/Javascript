//for upperside
nsp=0;
nst=9;
for(let row=1; row<=5; row++){
    //space
    for(let sp=1; sp<=nsp; sp++){
        process.stdout.write(" ");
    }
    for(let st=1; st<=nst; st++){
        process.stdout.write("*");
    }
    console.log();
    nsp=nsp+1;
    nst=nst-2;
}
//for lower side
let ns=3;
let nr=3;
for(let i=1; i<=4; i++){
    //space
    for(let s=1; s<=ns; s++){
    process.stdout.write(" ")
    }

    //star
    for(let r=1; r<=nr; r++){
        process.stdout.write("*")
    }
    console.log();
    ns=ns-1;
    nr=nr+2;
}