class Employee
{
    constructor(eid,ename,desig,sal)
    {
        this.Eid = eid;
        this.Ename = ename;
        this.Desig = desig;
        this.salary = sal;
    }
}
class Manager extends Employee
{
    constructor(eid,ename,desig,sal,project)
    {
        super(eid,ename,desig,sal);
        this.Project=project;
    }

details(){
    console.log("Eid"+this.Eid)
    console.log("Ename"+this.Ename)
    console.log("Designation"+this.Desig)
    console.log("Project"+this.Project)
    console.log("salary"+this.Salary)
}
}
var obj1 = new Manager('Ram',13,"gadag","helo","kl");
obj1.details();