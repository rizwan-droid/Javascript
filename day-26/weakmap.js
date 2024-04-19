let obj={
    d:4,
}


let weakmap= new WeakMap();
weakmap.set({a:1},10)
weakmap.set({b:2},20)
weakmap.set({c:3},30)
weakmap.set(obj,40)
// console.log(weakmap);
console.log(weakmap.has(obj))

//delete
weakmap.delete(obj)
console.log(weakmap);
console.log({x:10}=={x:10});



let obj1={
    xx:100,
}

let obj2={
    xx:100,
}