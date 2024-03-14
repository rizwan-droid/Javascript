//23456 = 2 3 4 5 6 
/*
let num=23456;
let nod=0;
let temp=num;
while(temp>0){
    temp=Math.floor(temp/10);
    nod=nod+1;
}
let div=Math.pow(10, nod-1);
while(num>0){
    let q=Math.floor(num/div);
    console.log(q);
    num=num%div;
    div=Math.floor(div/10);
}
*/

//edge case
//234560 = 2 3 4 5 6 0

let num=234560;
let nod=0;
let temp=num;
while(temp>0){
    temp=Math.floor(temp/10);
    nod=nod+1;
}
let div=Math.pow(10, nod-1);
while(div!=0){
    let q=Math.floor(num/div);
    console.log(q);
    num=num%div;
    div=Math.floor(div/10);
}
