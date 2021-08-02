// Write the code to achieve below -
// - Find all coders older than 24
// - Find the total age of all coders
// - List all female coders
// - List all admin coders in ascending order
// - Sort all coders by age
// - Find the total age of male coders under 25


const coders =[
    {name:'john',age:20,gender:'m',admin:false},
    {name:'Neha',age:40,gender:'f',admin:true},
    {name:'Ria',age:30,gender:'f',admin:false},
    {name:'Sejal',age:50,gender:'f',admin:true},
    {name:'Mark',age:40,gender:'m',admin:false},
];
//older than 24
let abv = coders.filter((coder)=>{
    return coder.age>24;
});
console.log(abv);

//Total age of all the coders
let totalAge = coders.reduce((sum,b)=>{
        return sum+b.age;
},0);
 console.log(totalAge);
//List all female coders
let femaleCoders = coders.filter((coder)=>{return coder.gender== 'f'});
console.log(femaleCoders);

//All admin coders in ascending order
let adminAsc= coders.sort((a,b)=>{return b.admin-a.admin})
console.log(adminAsc);

//sort by age
let sortAge = coders.sort((a,b)=>{ return a.age-b.age})
console.log(sortAge);

//Total age of male coders
let maleCoders = coders.filter((coder)=>{return coder.gender== 'm'});
let maleAge = maleCoders.reduce((sum,b)=>{
    return sum+b.age;
},0);
console.log(maleAge);