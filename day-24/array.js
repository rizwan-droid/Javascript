// data type - data structure - linear - dynamic data store (js)
// in different languages we can only store similar data types data

let array = [1,2,3,4,5];
// flat - 1d array
let arr1 = [1,2,3,true, false,function fun(){}, [5,6,7,8], "rizwan"];
console.log(arr1[6][0]);
console.log(arr1[7]);
console.log(arr1[3]);

//array - mutable /immutable
//array are mutable as we can change the value of the array

// arr1[4]="chaUDHAry";
// console.log(arr1);

// //new Array

// let arr3=new Array(100,200,300,400);
// console.log(arr3);


// //array.from

// let arr4= Array.from([10,20,30,40,50,60])
// console.log(arr4);
// always returns an array


// //array.of

// let arr5= Array.of(1000,2000,3000,4000)
// console.log(arr5);


// let multarr=[[10,20,30],[100,200,300],[1000,2000,3000]]
// console.log(multarr);
// console.log(multarr[1])
// console.log(multarr[1][2]);


// // array traversal


// for(let i=0;i<arr4.length;i++){
//     console.log(arr4[i]);
// }


// //to string method

// let arr6=[100,200,300,400]
// console.log(arr6.toString());
// convert array into string

// //traversal - forEach loop

// let arr7=[1,2,3,4,5,6,7,8,9,10]
// let resaponse=arr7.forEach((maal,index,arr)=>{
//     console.log(maal,index,arr);
//     return "vikas"
// })

// console.log(resaponse);
// always returns undefined


// //array methods
// //slice
// //splice
// // pop push shift unshit indexof lastindex find concat

// let arr8=[10,20,30,40,50]
// let res=arr8.push(10)
// console.log(arr8);
// console.log(res);
// returns array length

// //pop
// arr8.pop();
// console.log(arr8);

// arr8.push(100,200,300)
// console.log(arr8);

// //shift
// let arr8=[10,20,30,40,50]

// arr8.shift()
// console.log(arr8);


// let res=arr8.unshift(10000)
// console.log(arr8);
// console.log(res);


//index of ,includes 
// let arr8=[10,20,30,40,50]
// console.log(arr8.includes(1000));
// console.log(arr8.indexOf(400));


//splice - 
// let arr8=[10,20,30,40,50]
// let res=arr8.splice(1,2)
// console.log(arr8);
// console.log(res);

// let res=arr8.splice(2,1,200)
// console.log(arr8);
// console.log(res);

// arr8.splice(1,3,100,200,300)
// console.log(arr8);


//slice

// let arr8=[10,20,30,40,50]
// let res=arr8.slice(1,4)
// console.log(arr8.slice(0));
// // console.log(res);
// console.log(arr8.slice(-1,-4));
// console.log(arr8.slice(-4,-1));

// find and find index
// find finds the value and return that value while find index find the index and returns the index of that value. they  both asks for a call back function

let arr8=[10,20,30,40,50]
let res = arr8.find((item)=>{
    return item == 30;
})
console.log(res);

let arr=[10,20,30,40,50]
let res1 = arr.findIndex((value)=>{
    return value==30;
})
console.log(res1);
