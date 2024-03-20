/* armstrong number

153 = 1 ki power 3, 5 ki power 3, 3 ki power 3 = 153;
*/

let num = 153;
let temp = num;
let temp1 = num;
let sum=0;
let nod=0;
while (temp1>0) {
    temp1=Math.floor(temp1/10);
    nod++;
}

while(temp>0){
    let dg = temp%10;
    sum+=Math.pow(dg, nod);
    temp=Math.floor(temp/10);

}
if(num==sum){
    console.log("yes");
}else{
    console.log("No");
}