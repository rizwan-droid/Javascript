function fun(a,b){
    return a+b;
}

let rv = fun(10,20);
console.log(rv);

// as there are two parameters so the arguments are also two if someone passes more than two argument then 1st and 2nd gets stored in that variable however rest remains undefined as they donot have proper variable to be stored. to avoid such obstacles we can create more and more parameters but if the arguments are many more like 10 or 20 then it can cause slow and it will be a bad practice. to avoid such things we use rest operators.

function sum(...arg){
    console.log(arg);
    let sum = 0;
    for(const value of arg){
        sum+=value;
    }
    return sum;
}

let rv1=sum(10,20,30,40);
console.log(rv1);

// NOTE: rest and spread operators always gives an array