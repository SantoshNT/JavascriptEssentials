class student{
    constructor(sid,sname,age,city){
        this.sid=sid;
        this.sname=sname;
        this.age=age;
        this.city=city;
    }
    show(){
        console.log(`ID:${this.sid} Name:${this.sname} Age:${this.age} City:${this.city}`);
    }
}
//array of studnets

let students = [
    new student(1,'rohan',12, 'mysore'),
    new student(2,'sohan',67, 'hubli'),
    new student(3,'mohan',99, 'ooty'),
    new student(4,'lohan',29, 'gadag')
]
for (let stu of students){
    stu.show();
}