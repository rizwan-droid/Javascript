nsp=0;
for(let row=1; row<=5; row++){
    //space
    for(let sp=1; sp<=nsp; sp++){
        process.stdout.write(" ")
    }
    //new line
    console.log("*")

    //update
    nsp=nsp+1;

}