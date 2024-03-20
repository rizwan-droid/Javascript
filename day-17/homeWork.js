// Inverse number

function inverseNumber(num){
    if(num>=0 && num<=9){
        return num;
    }

    let inverseNum = 0;
    while(num!=0){
       inverseNum = inverseNum * 10 + (num%10); 
       num = Math.floor(num/10);
    }
    
    return inverseNum;
   
}

let rv=inverseNumber(45678);
console.log(rv);

//another method

// let num=786745;
// let k = 2;
// let nod=0;
// let temp=num;
// while(temp!=0){
//     temp=Math.floor(temp/10);
//     nod=nod+1;
// }

// k=k%nod;
// if(k<0){
//     k+=nod;
// }

// let div=1;
// let mult=1;
// for(let i=1;i<=nod;i++){
//     if(i<=k){
//         div=div*10;
//     }else{
//         mult=mult*10;
//     }
// }

// let rot=0;
// let qt=Math.floor(num/div);
// let rem=num%div;
// rot=rem*num+qt;
// console.log(rot);
