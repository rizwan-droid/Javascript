// let revreseNum=num=>{
//     let ans = '';
//     while(num>0){
//     ans=num%10;
//     console.log(ans)
//     num=Math.floor(num/10);
//     }

    
// }
// revreseNum(12345);

//serially number
//input 1234 output 1 2 3 4
/* 1234/1000 = 1, 234 print 1
    234/100 = 2, 34 print 2 */

let func=n=>{
    let nod=0;
    let x=n;
    while(x>0){
        x=Math.floor(x/10);
        nod+=1;
    }
    let div=Math.pow(10, nod-1);
    while(n>0){
        let y=Math.floor(n/div);
        console.log(y);
        n=n%div;
        div=Math.floor(div/10);
    }
}
func(1234);