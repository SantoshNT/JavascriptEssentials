class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    set age(value){
        this.age = value;
    }
    get age(){
        return this.age;
    }
}
var stud = new Student("Narayan",21);
stud.age = 12;
console.log(`PID:${stud.age} PName:${stud.name}`)