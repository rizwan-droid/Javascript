let nsp=2;
let nst=1;
for(let row=1; row<=3; row++){
    //space
    for(let sp=1; sp<=nsp; sp++){
    process.stdout.write("\t")
    }

    //star
    for(let st=1; st<=nst; st++){
        process.stdout.write("*\t")
    }
    console.log();
    nsp=nsp-1;
    nst=nst+2;
}