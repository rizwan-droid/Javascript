let arr1 = [1,2,3,4,5];
let arr2 = arr1;
arr1.pop();
console.log(arr1);
console.log(arr2);

//changes will reflect in both as it passes address
// address passed in non-primitive and value passed in primitive.

// from the above code - we understand the problem that if we change in first then it will reflect in other also.

//Method to copy an array - spread Operator
let arr3 = [1,2,3,4,5,6,7,8];
let arr4 = [...arr3];
arr3.pop();
console.log(arr3);
console.log(arr4);

// Deep copy - value copy - original not affected - spread operator
//shallow copy - reference (address copy) - original affected - without spread operator

let obj1 = {
    name:'rizwan',
    age:23
}
//let obj2 = obj1;
//reflects in both as we have not used spread operator
let obj2 = {...obj1}
 obj1.profession = 'student';
 console.log(obj1);
 console.log(obj2);
