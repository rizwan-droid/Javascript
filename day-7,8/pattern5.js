for(let row=1; row<=5; row++){
    for(let str=1; str<=5-row+1; str++){
        process.stdout.write("*")
    }
    console.log();
}

//or

/*
let nst=5;
for(let row=1; row<=5; row++){
    for(let st=1; st<=nst; st++){
        process.stdout.write("*")
    }
    console.log();
    nst=nst-1;
}
*/