//1. array map method
let arr = [10,20,30];
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;
})
console.log(a); 

// for each and map both contains 3 arguments (value,index,array)
// it seems same as for each loop however they both are different
// map function returns an another array and foreach is used to perform some operations with the array value.

// 2. array filter method
let arr2 = [1,2,3,4,5,6,7];
let a2 = arr2.filter((val)=>{
    return val>3;
})
console.log(a2);
// filter mein ek function pass karenge with condition and wo hume condition true wali values to ek naya array mein return kardega.
// these map, filter donot change the original values

// 3. array reduce method
// let arr3 = [1,2,3,4,5];
// let a3 = arr3.reduce((b1, b2)=>{
//     return b1+b2;
// })
// console.log(a3);

//OR
let arr3 = [1,2,3,4,5];
const a3 = (b1, b2)=>{
    return b1+b2;
}
let newarr = arr3.reduce(a3);
console.log(newarr);

/* how reduce function works
arr3 = [1,2,3,4,5]
-b1 = 1
-b2 = 2
return b1+b2 = 3 - let us suppose this as 'resultant'
b1 = resultant
b2 = 3
return operationn
b1 = resultant
b2 = 4
*/

//NOTE: Map and filter returns an array while reduce returns a value.


