function GetFlowers(){
    return [
        'rose','lilly'
    ];
}
for (flower of GetFlowers())
{
    console.log(flower)
}
function Getstudents(){
    let students = [
        {Sid:1,Sname:"Rohan",age:10},
        {Sid:2,Sname:"Mohan",age:30},
        {Sid:3,Sname:"Sharan",age:40},
        {Sid:4,Sname:"Viaan",age:70},
        {Sid:5,Sname:"Madan",age:90},
        {Sid:6,Sname:"Raman",age:100},
        {Sid:7,Sname:"loki",age:101},
        {Sid:8,Sname:"Mahesh",age:102},
    ];
    let student = students[0];
    for(let student of students)
    {
        console.log(`Id:${student.Sid}Name:${student.Sname}age:${student.age}`)
    }
}
Getstudents();