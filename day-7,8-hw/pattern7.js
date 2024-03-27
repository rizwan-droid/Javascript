for(i=1; i<=2; i++){
    for(j=1; j<=11; j++){
        if(i==1 && (j==1 || j==5 || j==6 || j==7 || j==11)){
            process.stdout.write(" ");
        }else if(i==2 && j==6){
            process.stdout.write(" ");
        }else{
        process.stdout.write("*");
        }
    }console.log();
}
nsp=0;
nst=11;
for(let row=1; row<=6; row++){
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