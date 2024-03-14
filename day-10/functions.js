
// function meraIntro(){
//     console.log("my name is puneet chaudhary ")
//     console.log("my age is 27")
//     console.log("i am from delhi")
// }



// meraIntro();
// meraIntro();


//parameters and args


// function sayHello(name,age){
//     console.log("hello",name)
//     console.log(age)

// }
// sayHello("puneet",27);
function SayHello(name,age,address,ismarried,marks){
    console.log(name,age,address,ismarried,marks)

}

SayHello("vikas",27,"delhi",false,75);
SayHello("Puneet","55","mumbai",true,66)
SayHello(22,"vikas",75,true,"delhi")


//js es5 es6

//es5 - function statement, function expression, anonymous

function Fun(x,y){
    console.log("i am inside function")
}
Fun(10,20);


//function express
//js - function - first class memebr


let myage=function sayMyAge(age){
    console.log("your age is ",age);
}
myage();


let anony=function(name){
    console.log("i am anonymous functions")
}
anony("vikas");

//es6 function - fat arrow function
let fatty=name=>console.log("i am fat arrow func " +name)

fatty("puneet");