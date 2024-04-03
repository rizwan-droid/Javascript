// let fname="vikas";
// let lastname="chaudhary";
// let age =27;
// function task(){
//     console.log("teaching");
// }

// let salary=10000;


// // array -
// let employee=[["vikas","chaudhary",27,function task(){},10000]]
// //

// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }

// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }


// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }


// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }


// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }


// let emp1={
//     fname:"vikas",
//     lname:"cjaudhary",
//     age:27,
//     task(){
//         console.log("teaching");
//     }
// }




//es 5 - function contructor 
//constructor - copy

//this , new keyword - js new 

// function DiceEmployee(fname,lname,age,salary,task){
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//     this.salary=salary;
//     this.task=task;





// }
// let emp1=new DiceEmployee("vikas","chaudhary",27,10000,function task(){
//     console.log("teaching ");
// })
// let emp2=new DiceEmployee("jugal","kumar",22,5000,function task(){console.log("office boy");})
// console.log(emp1);
// console.log(emp2);


//es6 - class keyword 
//class - skelton , blueprint




// class DiceEmployee{
//     firstName;
//     lastName;
//     age;
//     salary;
//     task;
//     constructor(fname,lname,age,salary,task){
//         console.log(" m chal gya ");
//         this.firstName=fname;
//         this.lastName=lname;
//         this.age=age;
//         this.salary=salary;
//         this.task=task;

//     }



// }
// let emp1= new DiceEmployee("puneet","chaudhary",27,10000,function task(){console.log("i am IT GUY");})
// let emp2= new DiceEmployee("jugal","kumar",22,5000,function(){console.log("i am an office boy");})
// let emp3= new DiceEmployee();
// // console.log(emp1);
// console.log(emp2);









// let emp1= new DiceEmployee();
// let emp2=new DiceEmployee();
// console.log(emp1);
// console.log(emp2);
// console.log(emp2.age);
// emp2.task();






class Human{
    name;
    nooflegs;
    noofhands;
    gender;
    food;
    constructor(name,legs,hands,gender,food){
        this.name=name;
        this.nooflegs=legs;
        this.noofhands=hands;
        this.gender=gender;
        this.food=food;
    }

}

class Animal extends Human{
    constructor(name,legs,hands,gender,food){
        super(name,legs,hands,gender,food);
        this.name=name;
        this.nooflegs=legs;
        this.noofhands=hands;
        this.gender=gender;
        this.food=food;
    }
  
}
let animal1= new Animal("rabit",2,2,"male",["grass,mitti,carrot"]);
let animal2= new Animal("cow",4,0,"female",function merakhana(){
    console.log("grass ");
})
console.log(animal1);
console.log(animal2);
console.log(animal2.food());