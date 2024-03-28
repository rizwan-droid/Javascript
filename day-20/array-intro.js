/*
syntax - []
*/

let studentMarks = [20, 21, 22, 23, 24, 25];
console.log(studentMarks[0]);
console.log(studentMarks[1]);
console.log(studentMarks[2]);
console.log(studentMarks[3]);

// More dynamic array
let arr = [10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
// we can give any data types value inside an array
console.log(arr[4]);
console.log(arr[8]);

console.log(arr.length);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let arr1 = [1,2,3,10, 20, true, null, "hi", 1.2, undefined, [1,2,3,4], function func(){}, function fun2(){}];
for(i=0;i<arr1.length;i++){
    console.log(ar1r[i]);
}
//method to print array value when that array is present inside an array.
console.log(arr1[10][1]);