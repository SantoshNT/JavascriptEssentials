// let n = 1;
// while(n<=10)
// {
//     console.log(n)
//     n++;
// }
for(let i=1;i<=10;i++)
{
    if(i%2!==0)
    continue;
    console.log(i);
}
let x=""
for (let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        x+='* '
    }
    console.log(x);
    x='';
}