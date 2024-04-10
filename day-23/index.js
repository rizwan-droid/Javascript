class A{
    name = "rizwan";
    course = "full stack";
    getName(){
        return this.name;
    }
    constructor(){
       
    }
}
class B extends A{
    drink;
    constructor(drink){
        super();
        this.drink = drink;
    }
}
let b1 = new B("water");
console.log(b1);
let a1 = new A();
console.log(a1);
