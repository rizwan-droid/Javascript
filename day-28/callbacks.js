

//func - function -

// let arr=[1,2,3,4,5,6];
// arr.forEach(function(maal){
//     console.log(maal);
// })

// function Test(callback){
//     console.log(callback());


// }

// Test(()=>{
//     console.log("test 1");
// })

// function testing(callback){
//     console.log("hey i am a callback function");

// }

// testing(function(){
//     console.log(" hello world");
// })

//callback hell


function test(callback){
    callback();

}

test(()=>{
    console.log("test 1 ");

    Test(()=>{
        console.log("test 2");
        test(()=>{
            console.log("test 3");
            test(()=>{
                console.log("test 4");
                test(()=>{
                    console.log("test 5");
                })
            })
        })
    })
})