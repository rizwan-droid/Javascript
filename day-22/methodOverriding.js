

class ParentClass{
    className="Parent";
    getClassName(){
        return this.className;
    }


}

class ChildClass extends ParentClass{
    className="Child";
    getClassName(){
        return "dice";
    }


}

let child1 = new ChildClass();
console.log(child1);
console.log(child1.className);
console.log(child1.getClassName());

// let parent1 = new ParentClass();
// console.log(parent1.className);