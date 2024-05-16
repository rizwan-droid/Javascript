// function getDataFromApi(){
//     let response = fetch("https://restcountries.com/v3.1/all?fields=name,flags");
//     response.then((res)=>{
//         console.log(res);
//         return res;
//     }).then((data)=>{
//         console.log(data.json());
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// getDataFromApi();

// async-await actually converts ayncronous into synchronous

async function getDataFromApi(){
    console.log("hello world");
    let response =await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    let actualdata =await response.json();
    console.log(actualdata);
    
    console.log("hello world");

    for(i=0; i<10; i++){
        console.log(i);
    }
}

getDataFromApi();

