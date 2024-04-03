// // over load- 


// class Area{

//     area(side){
//         return side*side;
//     }

//     area(len,bred){
//         return len*bred;
//     }

   

// }

// let area1= new Area();
// console.log(area1.area(4));
// // console.log(area1);





class Area{
    area(side){
        return side*side;
    }

    area(len,bre){
        return len*bre;
    }
}

let ar= new Area();
let rv=ar.area(5);
console.log(rv);