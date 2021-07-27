let numbers=[1,2,3,5];
for (let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
console.clear();
for(let i in numbers);
{
    console.log(numbers[i]);
}
console.clear();
for (let i of numbers)
{
    console.log(i);
}