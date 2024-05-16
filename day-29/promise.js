let promise = new Promise((resolve,reject)=>{
    resolve('resolved promises');
    // reject('rejected promise');
})

console.log(promise);
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// behind the scene how it works
/*
GEC(global execution context)
FEC(function execution context)
CS(call stack): two types - synchronous and asynchronous
PQ(priority queue)
EL(event loop)

js code is run by GEC. 
every code is run inside the call stack . At first synchronous call stack is executed(loop, document simple one etc) after that asynchronous runs(timeout, callback, promises). the prmomise which takes less time will run at first it is being decided by the priority queue. async code runs when the call stack is vaccum. it is being checked by the event loop.

js is called as single threaded language means ek time pe ek hi kaam hoga.
for multithreading async js is used.
*/

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('resolve promise1');
    }, 4000);
})

promise1.then(()=>{
    console.log('test 1');
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('resolve promise2');
    }, 3000);
})

promise2.then(()=>{
    console.log('test 2');
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('resolve promise3');
    }, 2000);
})

promise3.then(()=>{
    console.log('test 3');
});

let promise4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('resolve promise4');
    }, 1000);
})

promise4.then(()=>{
    console.log('test 4');
});


console.log('promsie end here');
for(i=0; i<10; i++){
    console.log(i);
}