/**
 * arithmatic operators -maths 
 * +,-,*,/,%
 * 
 * Relational Operators
 * >,<,>=,<=,==,!=
 * 
 * logical operators - and or not 
 * 
 * 
 * 
 */

// let num1=7;
// let num2=3;
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1%num2)


//relational- result - true/false

// let num1=100;
// let num2=10;
// console.log(num1>num2)
// console.log(num1<num2)
// console.log(num1==num2)
// console.log(num1!=num2)
// console.log(num1>=num2)
// console.log(num1<=num2)


//dry run
// num1>num2 10>10 false
//num1=num2  true ==- TRUE 
//NUM1>NUM2 100>10 true

//num1<num2 100<10 false
//num1=num2 100=10 false


console.log(!true)
console.log(!false)
console.log(!1)
console.log(!0)
console.log(!5)
console.log(!NaN)
console.log(!undefined)
console.log(!"")

//falsy values in js = false, 0, -0, 0n, "", null, undefined, NaN

//logical AND - hindi aur - guna - multiply
console.log("----------------------")
let num1=10
let num2=20;
console.log(num1<=10 && num2==20)
console.log(num1==5 && num2==20)
console.log("-------OR------")
console.log(num1<=10 || num2==20)
console.log(num1==5 || num2==20)



//dry run
/**
 *  num1<=10 10<=10 10<10 (false) 10=10 true =TRUE =1
 *  NUM2==20 20=20 TRUE
 * TRUE && True ==true
 * 
 * num1==5 10=5 (False) 
 * num2==20 20=20 true
 * false && true = false
 * 
 * //final cases with AND &&
 * T T T
 * T F F
 * F T F
 * F F F 
 * 
 * 
 * 
 * 
 * 
 */





/**
 *  logical AND - && - aur (hindi)- guna
 *  logical OR -|| - jodna 
 *  Logical NOT - ! - ulta - 0-1,1-0,true-false,false-true
 * 
 * 
 * 
 */

//Logical OR ||
/**
 *  T T T
 *  T F T
 *  F F F
 *  F T T
 * 
 * 
 * 
 */