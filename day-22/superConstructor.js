

class ParentClass{
    className="Parent";
    salary;


    getClassName(){
        return this.className;
    }
    constructor(salary){
        this.salary=salary;

    }
}

class ChildClass extends ParentClass{
    constructor(salary){
        super(salary)
        this.salary=salary;
    }



}

let child1= new ChildClass(10000);
// console.log(child1.getClassName());
console.log(child1);