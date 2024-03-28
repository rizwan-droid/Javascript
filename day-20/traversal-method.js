//Traversal methods
//1. using for loop
/*
let arr = [10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//2. using while loop

let arr1 = [10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
let j=0;
while(i<arr1.length){
    console.log(arr1[i]);
    j++;
}


//3. using for of loop - it donot works for object because the key-values are not iterable

let arr2 = [10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
for(const value of arr2){
    console.log(value);
}

//4. using for in loop
let arr3 = [10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
for(const a in arr3){
    //console.log(a);
    //it prints indexing of the array.
    console.log(arr3[a]);
    //it prints value of the array.
    //it runs same for objects as well like 'a' prints the key and arr3[a] prints value.
}

//5. for each loop
let a = [1,2,3,4,5];
a.forEach((element)=>{
    console.log(element*element);
})
*/

// Note: array.from is used to convert any object into array.
/*
for eg
let name = 'rizwan';
let arr = array.from(name);
console.log(arr);


//6. using callback function
 let array = [1,2,3,4,5];
 array.map(function fun(val){
    console.log(val);
// we can take any type of function
 })

 */







