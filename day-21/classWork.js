// let arr = ['a','b','c'];
// // traverse using map
// //upper case

// let a = arr.map(function trav(element){
//     return element.toUpperCase();
// })
// console.log(a);



let arr1 = ['a','A','b','B','c','C'];
let arrayUpper = [];
let arrayLower = [];
//traverse using filter
// different uppercase

let a1 = arr1.filter(function trav1(value){
    if(value >='A' && value<='Z'){
        arrayUpper.push(value);
    }else{
        arrayLower.push(value);   
    }
})
console.log('upper case', arrayUpper);
console.log('Lower case', arrayLower);

//using ternary operator
let arr2 = ['a','A','b','B','c','C'];
let arrayUpper1 = [];
let arrayLower1 = [];

let a2 = arr2.filter(function trav1(value){
    value >='A' && value<='Z' ? arrayUpper1.push(value) : arrayLower1.push(value);
})
console.log('upper case', arrayUpper1);
console.log('Lower case', arrayLower1);







