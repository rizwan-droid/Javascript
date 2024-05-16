// js gets data in json format = javascript object notation. it is also like object containing key value pair. we get data from restcountries api and it get attached to our js by using fetch api.

let response = fetch("https://restcountries.com/v3.1/all?fields=name,flags");
// console.log(response);
// response.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

// fetch api works in 2 step = first blob state then it gets converted into json format
response.then((res)=>{
        console.log(res);
        return res;
    }).then((data)=>{
        console.log(data.json());
    }).catch((error)=>{
        console.log(error);
    })

// one third party gives json file directly called as axious.