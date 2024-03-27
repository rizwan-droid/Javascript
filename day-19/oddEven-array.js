//differentiate odd and even number from an array

let num = [1,2,3,4,5,6,7,8,9];

for(i=0; i<num.length;i++){
    if(num[i]%2==0){
        console.log('number is even', num[i]);
    }else{
        console.log('number is odd', num[i]);
    }
}