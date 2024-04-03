let arr = [1,2,3,4,5,3];
arr.pop();
console.log(arr);
// it removes the last value

arr.push(10);
console.log(arr);
// it adds value at the last index of array

arr.shift();
console.log(arr);
// it removes first value

arr.unshift(20);
console.log(arr);
// it adds value at the first index of the array

// let response =  arr.includes(3);
// console.log(response);
// it gives true or false value.. it shows that the given value is present inside it or not.

console.log(arr.indexOf(4));
// it finds out the index of the given element
// if the given element is not present inside it then it gives -1.

console.log(arr.lastIndexOf(3));
// it gives the last occurance of the given element

console.log(arr.slice(1,5));
//it takes index in parameter and slice the array from 1st parameter to 2nd parameter
