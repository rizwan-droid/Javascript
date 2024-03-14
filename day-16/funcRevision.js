// function oddeven(ll,ul){
//     for(let num=ll;num<=ul;num++){
//         if(num%2==0){
//             console.log("even",num);
//         }else{
//             console.log("odd",num);
//         }
//     }
    
// }


// oddeven(1,500)
// oddeven(1000,2000)

//es 5 - es6 function

//es 5 - function stmt, function expression ,anonymous

// function sayHello(){
//     console.log("hello vikas");
// }

// sayHello();
// sayHello();sayHello();sayHello();sayHello();







// console.log();


// let myfun=function sayHello(){
//     console.log("hello vikas");

// }
// myfun();

// let myfun=function(){
//     console.log("hello vikas");

// }

// myfun()



// let myintro=function (name,age,address,ismarried){
//     console.log("my name is "+name+"my age is "+age+"my address is "+address+"am i married"+ismarried);

// }

// myintro(27,"vikas","Delhi",false)



//es 6 - fat arrow, fat arrow witj one parameter, 

// let myfun=()=>{
//     console.log("hello vikas");
// }
// myfun();

// let myfun=(name)=>{
//     console.log("hello "+name);
// }

// myfun("vikas");


// let myfun=name=>console.log("hello "+name);

// myfun("deepak")

// let myintro=(name,age,address)=>console.log("helloo "+name+" "+"age is "+age+" "+"addres is "+address);


// myintro("vikas",27,"delhi");


// function sayHello(){
//     console.log("hello vikas ");

//     return 101

    
   

// }
// let rv=sayHello();
// console.log(rv);






// function sayMyName(name){
//     console.log("hello "+name);
//     return true
// }

// let rv=sayMyName("vikas")
// console.log(rv);




// let myfun=name=>{return 101}


// let rv=myfun("vikas")
// console.log(rv);



// let evencount=(ll,ul)=>{
//     let count=0;
//     for(let num=ll;num<=ul;num++){
//         if(num%2==0){
//             count=count+1;
//         }
//     }
//     return count;
// }

// let rv=evencount(1,100)
// console.log(rv);


function countPrimes(ll,ul){
    let count=0;
    for(let num=ll;num<=ul;num++){
        
      
        for(let div =2;div*div<=num;div++){
            if(num%div==0){
                count=count+1;
            }
        }
        }
        return count;
    }
let rv=countPrimes(10,100)
console.log(rv);