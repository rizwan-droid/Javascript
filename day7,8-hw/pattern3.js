for(i=1; i<=5; i++){
    for(j=1;j<=9;j++){
        if(i==1 && j==5){
            process.stdout.write("*");
        }else if(i==2 && (j==4 || j==6)){
            process.stdout.write("*");
        }else if(i==3 && (j==3 || j==7)){
            process.stdout.write("*");
        }else if(i==4 && (j==2 || j==8)){
            process.stdout.write("*");
        }else if(i==5){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }console.log();
}