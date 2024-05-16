

//synatx 

//ie - shop - shopkeeper - chips -

//syntax

// let promise=new Promise((resolve,reject)=>{
//     // resolve()
//     reject()

// })
// console.log(promise);

// let promise = new Promise((resolve,reject)=>{
//     // resolve("chips mil gya ")
//     reject("mere paas nahi h")

// })

// //resolve- then
// //reject - error - catch
// console.log(promise);
// // promise.then((data)=>{
// //     console.log(data);
// // })

// promise.catch((error)=>{
//     console.log(error);
// })



let items=["pen","paper","pencil","eraser"];

let promise = new Promise((res,rej)=>{
    if(items.includes("pen")){
        res("pen h mere paas")
    }else{
        rej("nahi mila")
    }


})
console.log(promise);

// promise.then((data)=>{
//     console.log(data);
// })
// promise.catch((error)=>{
//     console.log(error);
// })

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})