let num = prompt("Enter a number");
temp1 = num;
temp = num;
sum = 0;
nod = 0;

while(temp1>0){
    temp1 = Math.floor(temp1/10);
    nod++;
}

while(temp>0){
    let ld = temp%10;
    sum += Math.pow(ld , nod);
    temp = Math.floor(temp/10);
}

if(num==sum){
    console.log("This is an Armstrong number", num);
}else{
    console.log("This is not an Armstrong number", num);
}