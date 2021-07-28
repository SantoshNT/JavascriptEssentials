class Person
{
    constructor(){
        this.Pid=1;
        this.Pname="Ram";
        this.City="Bangalore"   
     }
}
let person = new Person();
let person1 = new Person();
console.log(person.Pid+" "+person.City+" "+person.Pname);


class Student
{
    constructor(name,age,city)
    {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}
var obj = new Student('sachin',12);
obj.display()
var obj1 = new Student('Ram',13,"gadag");
obj1.display()