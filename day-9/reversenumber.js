// 456789 - 987654
// number%10==last digit pull out the last digit
// num = Math.floor(num/10) num value without that pulled out value

let num=456789;
while(num>0){
  let ld =  num%10;
  console.log(ld);
  num = Math.floor(num/10);
}



