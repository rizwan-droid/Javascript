let n=13;
nof=0;
for(i=1; i<=n; i++){
    if(n%i==0){
        nof+=1;
    }
}if(nof>2){
    console.log("not prime",n);
}else{
    console.log("prime",n);
}

//or

/*
let n=13;
nof=0;
for(i=2; i<=n-1; i++){
    if(n%i==0){
        nof+=1;
    }
}if(nof==0){
    console.log("prime",n);
}else{
    console.log("not prime",n);
}
*/

// optimization 
/*
let n=13;
nof=0;
for(i=2; i<=n-1; i++){
    if(n%i==0){
        nof+=1;
        break;
    }
}if(nof==0){
    console.log("prime",n);
}else{
    console.log("not prime",n);
}
*/

//fast and optimize: loop run to the square root as the factors started repeating itself


/*
let n=36;
nof=0;
for(i=2; i*i<=n; i++){
    if(n%i==0){
        nof+=1;
        break;
    }
}if(nof==0){
    console.log("prime",n);
}else{
    console.log("not prime",n);
}
*/
