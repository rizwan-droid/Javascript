// let promise = new Promise((resolve, reject)=>{
//     resolve("resolved promise");
// })
// let p = promise.then((data)=>{
//     console.log(data);
// })
// console.log(p);

// let promise = new Promise((resolve,reject)=>{
//     resolve('resolved promises')
// })
// promise.then(data=>console.log(data))
// .then(data=>console.log(data))
// .then(data=>console.log(data))
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// one to another then data transfer
// let promise = new Promise((resolve,reject)=>{
//     resolve('resolved promises')
// });
// promise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).catch((error)=>{
//     console.log(error);
// })

//multiple catch
let promise = new Promise((resolve,reject)=>{
    reject('reject promises')
    
    
});
promise.catch((error)=>{
    console.log(error);
    // return error;
    throw new Error('custom error')
}).catch((error)=>{
    console.log(error);
    // return error;
    throw new Error('custom error')
}).catch((error)=>{
    console.log(error);
    // return error;
    throw new Error('custom error')
}).catch((error)=>{
    console.log(error);
    // return error;
    // throw new Error('custom error')
// it will throw aan error as it gets resolve and it donot have another line to catch
})