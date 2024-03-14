for(let i=1;i<=5;i++){
    for(let j=1;j<=6;j++){
        console.log("vikas",i,j)
    }

}
/** l1- ram=i=1
 * i<=5 1<=5 true
 * l2- ram=j=1
 * j<=6 1<=6 true
 * l3 vikas 1 1
 * j++ j=2
 * j<=6 2<=6 true
 * l3 vikas 1 2
 * j++ j=3
 * j<=6 3<=6 true
 * l3 vikas 1 3
 * ..j=6
 * j<=6 6<=6 true
 * vikas 1 6
 * j++ j=7
 * j<=6 7<=6 false
 * 
 * i++ i=2
 * 
 */

for(let i=1;i<=2;i++){
    for(let j=1;j<=2;j++){
        for(let k=1;k<=2;k++){
            console.log("vikas",i,j,k)
        }

    }
}
console.log("loop k bahar fenk dia")


let i=2;
while(i<=5){
    for(let j=1;j<=3;j++){
        console.log("vikas",i,j)
    }
    console.log("dice")
    i++;
}
console.log("academy")