// function sum(a,b){
//     return a+b;
//     console.log("vikas")
// }
// let ans=sum(10,20)
// console.log(ans);


// function sayMyName(){
//     console.log("vikas")

// }
// let rv=sayMyName()
// console.log(rv);


// function sayMyName(){
//     return "vikas"
// }
// let rv=sayMyName();
// console.log(rv);

// let myfun=(name)=>{
//     return "vikas"
// }
// let rv=myfun();
// console.log(rv);

function CountDigits(num){
    let nod=0;
    while(num>0){
        let ld=num%10;
        num=Math.floor(num/10);
        nod=nod+1;
    }
    return nod;
    
}
let rv=CountDigits(786)
console.log(rv);