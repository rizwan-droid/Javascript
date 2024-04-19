// //weakset

// let weakset= new WeakSet();
// // console.log(weakset);

// //set -add 
// //weakset -add
// let obj={
//     val:400
// }

// weakset.add({val:100})
// weakset.add({val:200})
// weakset.add({val:100})
// weakset.add(obj)
// console.log(weakset);

// // has -true false- value

// console.log(weakset.has({val:100}));
// console.log(weakset.has(obj));

// //size ? no

// //delete

// weakset.delete({val:100})
// weakset.delete(obj)
// console.log(weakset);

// // array object destriucture - spread and rest ...


// let arr=[100,200,300,400,500,600]
// let a=arr[0]
// let b =arr[1]
// let c =arr[2]

// console.log(a,b,c);

// let [a,b,c,...d]=arr;
// console.log(a,b,c,d);

// let obj2={
//     a:10,
//     b:20,
//     c:30,
//     d:40
// }

// // let x=obj2.a;
// // let y=obj2.b;
// // let z=obj2.c;
// // console.log(x,y,z);

// let {a,b,c,d}=obj2;
// console.log(a,b,c,d);






// let object={
//     firstname:"vikas",
//     lastname:"chaudhary",
//     age:27,
//     addres:"delhi",
// }


// let {firstname:naam,lastname:akhirinaam,age:umar}=object;
// console.log(naam,akhirinaam,umar);



// let object={
//     name:{
//         firstname:"vikas",
//         lastname:"chaudhary",
//     },
//     age:21,
//     salary:10000,
//     address:"delhi"
// }

// let {name:{firstname:naam,lastname:akhirinaam},age,salary}=object;
// console.log(naam,akhirinaam,age,salary);




let object={
    firstname:"vikas",
    lastname:"chaudhary",
    age:27,
    salary:100000,
    getfullName:function(){
        console.log("vikas chauhdhary");
    },
    addres:"delhi",
    ismarried:false,
}

//for in

// for(const key in object){
//     console.log(key,object[key]);
// }

//iterate - Object.key(obj)

// console.log(Object.keys(object));


// for(const key of Object.keys(object)){
//     console.log(key);
// }


// console.log(Object.keys(object));


//Object.values(object)- array iterable - for of 


// for(const value of Object.values(object)){
//     console.log(value);
// }

// console.log(Object.entries(object));


for(const maal of Object.entries(object)){
    console.log(maal);
}