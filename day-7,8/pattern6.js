let nst=1;
nsp=4;
for(let row=1; row<=5;row++){
    //star
    for(let st=1;st<=nst; st++){
        process.stdout.write("*")
    }

    //space
    for(let sp=1; sp<=nsp; sp++){
        process.stdout.write(" ")
    }

    //star
    for(let st=1;st<=nst; st++){
        process.stdout.write("*")
    }

    //new line
    console.log()

    //update
    if(row<3){
        nst=nst+1;
        nsp=nsp-2;
    }else{
        nst=nst-1;
        nsp=nsp+2;
    }
}