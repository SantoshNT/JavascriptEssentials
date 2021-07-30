class Person{
    contructor(name){
        this.name = name;
    }
    details(){
        console.log("Name:" + this.name);
    }
}
class Employee extends Person{
    constructor(name,title){    
        super(name);
        this.title = title;
    }
    details(){
        super.details();
        console.log("Title:"+this.title)
    }
}
let obj = new Employee("Rohan","TeamLeader");
obj.details();