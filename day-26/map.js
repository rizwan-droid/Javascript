let map = new Map();
console.log(map);

let obj = {};
console.log(obj);
console.log(obj.__proto);

map.set = (1,10);
map.set = (2,20);
map.set = (3,30);
console.log(map);

//1,2,3 represents keys and it should be unique

//has - gives true or false

console.log(map.has(2));
//it works on keys. gives true for keys and false for value

//map.keys - gives iterable value
console.log(map.keys());

//iterate
for(const value of map.keys){
    console.log(value);
    //gives all the keys
}

//loop for values
console.log(map.values());

for(const maal of map.values){
    console.log(maal);
}

//map.entries
console.log(map.entries());
for(const val of map.entries){
    console.log(val);
}

