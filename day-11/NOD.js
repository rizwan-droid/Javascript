let num = (n) =>{
    let nod=0;
    while(n>0){
        n=Math.floor(n/10);
        nod+=1;
    }
    return nod;

}
let rv=num(345678);
console.log(rv);