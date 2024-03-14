let age =330;
if(age>=6 && age<=18){
    console.log("go to school")
}else if(age>=18 && age<=30){
    console.log("go to college")
}else if(age>=30 && age<=40){
    console.log("go to office")
}else if(age>=40 && age<=50){
    console.log("enjoy your retirement life")
}else if(age>=50 && age<=60){
    console.log("go to mandir")
}else{
    console.log("go to hell")
}

//dry run -
/**
 * 1- RAM - age =33;
 * 2- age>=6 33>=6 true age<=18 33<=18 false-> true && false = FALSE
 * 3- X
 * 4- AGE>=18 33>=18 TRUE age<=30 33<=30 false -> True && False =>False
 * 5-X
 * 6-age>=30 33>=30 True age<=40 33<=40 True ->True && True =>true
 * 7-" go to office "
 * 
 */