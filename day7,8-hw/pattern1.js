for(let row=1; row<=5; row++){
    for(let col=1; col<=6; col++){
        if(row==1 && col==1){
            process.stdout.write("*")
        }else if(row==2 && (col==1 || col==2)){
            process.stdout.write("*")
        }else if(row==3 && (col==1 || col==3)){
            process.stdout.write("*")
        }else if(row==4 && (col==1 || col==4)){
            process.stdout.write("*")
        }else if(row==4 && col==1){
            process.stdout.write("*")
        }else if(row==5){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }

    }console.log()


}