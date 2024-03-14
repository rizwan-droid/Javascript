

// for(let row=1;row<=5;row++){

//     for(let col=1;col<=row;col++){
//         process.stdout.write("*")
//     }
//     console.log();
// }


// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let col=1;col<=row;col++){
//         ans=ans+"*"
//     }
//     console.log(ans);




// }
// let nsp=4;
//  let nst=1;
// for(let row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     console.log();
//     nsp=nsp-1;
//     nst=nst+1;





// }

// let n=10;
// let nsp=n-1;
// let nst=1;

// for(let row=1;row<=n;row++){
//     let ans="";
//     for(let sp=1;sp<=nsp;sp++){
//         ans=ans+" "
//     }
//     for(let st=1;st<=nst;st++){
//         ans=ans+"*"
//     }
//     console.log(ans);
//     nsp=nsp-1;
//     nst=nst+1;
// }

// let nst=1;
// let nsp=3;

// for(let row=1;row<=4;row++){

//     for(let sp=1;sp<=nsp;sp++){
//     process.stdout.write(" ")
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     console.log();
//     nst=nst+2;
//     nsp=nsp-1;

// }


// let nst=1;
// let nsp=3;

// for(let row=1;row<=4;row++){
//     let ans="";
//     for(let sp=1;sp<nsp;sp++){
//         ans=ans+" "
//     }
//     for(let st=1;st<=nst;st++){
//         ans=ans+"*"
//     }
//     console.log(ans)
//     nst=nst+2;
//     nsp=nsp-1;



// }

// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//     if(row==col || row+col==6)
//         process.stdout.write("*")
//     else{
//         process.stdout.write(" ")
//     }
// }
//     console.log();

// }


n = 10;
for (let row = 1; row <= n; row++) {
    let ans = ""
    for (let col = 1; col <= n; col++) {

        if (row == col || row + col == 11) {
            ans = ans + "*"

        } else {
            ans = ans + " "
        }

    }
    console.log(ans);
}

// let nsp=3
// let nst=1;

//row 1-5
//star
//space
//star
//update space upper half - -1, lower sp+1;



for (let row = 1; row <= 6; row++) {
    for (let col = 1; col <= 6; col++) {

        if (row <= 2 || row >= 4 || row == col || row + col == 7) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log();
}



// let n = 10;
// for (let row = 1; row <= n; row++) {
//     let ans = "";
//     for (let col = 1; col <= n; col++) {
//         if (row === 5 || col === 5 || row + col === 11 || Math.abs(row - col) === 4) {
//             ans += "*";
//         } else {
//             ans += " ";
//         }
//     }
//     console.log(ans);
// }


// for(let row=1;row<=5;row++){
//     let ans=""
//     for(let col=1;col<=row;col++){
//         ans=ans+row;

//     }
//     console.log(ans);

// }


let val = 1
for (let row = 1; row <= 5; row++) {
    let ans = "";

    for (let col = 1; col <= row; col++) {
        ans = ans + val;
        val = val + 1;
     
    }
    console.log(ans);
}