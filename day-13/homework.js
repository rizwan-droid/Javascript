
let prime=[];
for(let num=1; num<=25; num++){
    nof=0;
for(i=2; i*i<=num; i++){
    if(num%i==0){
        nof+=1;
        break;
    }
}if(nof==0){
    prime.push(num);
}
}
let result="";

let count = 0;

for (let i = 1; i<prime.length; i++) {
    for (let j = 0; j < i; j++) {
        result+=(prime[count] + " ");
        count++;
    }

    result+="\n";
    if(count==prime.length)
    {
        break;
    }
}

console.log(result);