// Public Property, Private property, protected
// - public: accessible outside the class---pvt: not accessible and use '#' before setting the property

// static keyword - we were making an object from that class to access the property of that class but we can access that property by class name using static keyword.

class A{
    static x = 10;
    y = 20;
    #name = 'vikas';
    // use # for pvt property
    getName(){
        return this.y;
    }
    getpvt(){
        return this.#name;
    }
}
let a1 = new A();
console.log(a1.getName());
console.log(a1.name);
//it gives undefined as we are using pvt property for name. to access it outside we can make another method in the class to access that property and log that method from the class.
console.log(a1.getpvt());
console.log(A.x);
//gives the output as we have used static keyword on the property x.

// class A{
//          x = 10;
//          y = 20;
//          #name = 'vikas';
// }
// class B extends A{

// }
// let b1 = new B();
// console.log(b1);
// it shows that the private property is not herited in class B.
