let arr = [1,2,3,4,5,6,7,8,9];
let newarr=arr.filter((value)=>{
    let nof = 0;
        for(i=2;i*i<=value;i++){
            if(value%i==0){
                nof++;
                break;
            }
        }
        if(nof==0){
            // console.log('prime',value);
            return true;
        }else{
            // console.log('not prime',value);
            return false;
        }
})
console.log(newarr);