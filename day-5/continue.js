// for(let i=1;i<=10;i++){
//     console.log("vikas",i)
//     continue;
//     console.log("dice")
// }

/*
ram=i=1
i<=10 1<=10 true
vikas 1
i++ i=2
vikas 2






*/

// for(let i=1;i<=5;i++){
//     console.log("dice",i);
//     if(i==2){
//         continue;
//     }
//     console.log("vikas")
// }
/*
ram=i=1
i<=5 1<=5 true
line22 dice 1
line 23 i==2? 1==2 false
vikas
i++ i=2
i<=5 2<=5 true
line22 dice 2
line 23 i==2 2==2 true
if block k andrr 
continue - ye wali iteration komskpp
i++ i=3




*/

for(let i=1;i<=5;i++){
    console.log("vikas")
    if(i==3){
        continue;
        for(let i=1;i<=3;i++){
            console.log("dice")
        }
    }
    console.log("academy")
}
/*
l47- ram-i=1
i<=5 1<=5 true
l48 vikas
l49 i==3 1==3 false
l54 academy
i++ i=2
i<=5 2<=5 true
l48 vikas
l49 i==3 2==3 false
l54 academy
i++  i=3
 i<=5 3<=5 true
 vikas
 i==3 3==3 true
 conitnue - ye walio





*/
