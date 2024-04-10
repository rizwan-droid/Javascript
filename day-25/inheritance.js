class parent{
    firstName;
    lastName;
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
    constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
    }
}
class child extends parent{
    constructor(fname,lname){
        super();
        this.firstName=fname;
        this.lastName=lname;
    }
}
let parent1 = new parent("rizwan", 'ahamad');
console.log(parent1.getFullName());
let child1 = new child('rizwan', 'ahamad');
console.log(child1.firstName);
