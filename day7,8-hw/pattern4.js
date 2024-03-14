let string = "";
for(i=1; i<=9; i++){
for(j=1; j<=9; j++){
    if(i==1 && j==5){
        string+="*";
    }else if(i==2 && (j==4 || j==6)){
       string+="*";
    }else if(i==3 && (j==3 || j==7)){
        string+="*"; 
    }else if(i==4 && (j==2 || j==8)){
        string+="*";
    }else if(i==5 && (j==1 || j==9)){
        string+="*";
    }else if(i==6 && (j==2 || j==8)){
        string+="*";
    }else if(i==7 && (j==3 || j==7)){
        string+="*";
    }else if(i==8 && (j==4 || j==6)){
        string+="*";
    }else if(i==9 && j==5){
        string+="*";
    }
    else{
        string+=" ";
    }

    }string+="\n";
}console.log(string);

