multiple=(ll,ul)=>{
    for(i=ll; i<=ul; i++){
        if(i%3==0){
            console.log("This is the multiple of 3", i);
        }else if(i%5==0){
            console.log("This is the multiple of 3", i);
        }else if(i%7==0){
            console.log("This is the multiple of 3", i);
        }else{
            console.log("This is not the multiple of any", i);
        }
    }
}
multiple(10, 30);