nst=1;
for(let row=1; row<=5; row++){
    //star
    for(let st=1; st<=nst; st++){
        process.stdout.write("*")
    }
    console.log();

    if(row<3){
        nst=nst+1;
    }
    else{
        nst=nst-1;
    }
}