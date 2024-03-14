let diamond = function (n) {
    let nsp=4;
        let nst=1;
    for(i=1; i<=n; i++){
        //space
        for(let sp=1; sp<=nsp; sp++){
            process.stdout.write(" ");
        }
        //star
        for(let st=1; st<=nst; st++){
            process.stdout.write("* ")
        }
        //new line
        console.log();
        //update
        if(i>=1 && i<5){
            nst=nst+1;
            nsp=nsp-1;
        }else if(i>=5 && i<=9){
            nst=nst-1;
            nsp=nsp+1;
        }
        

    }
}

diamond(9);