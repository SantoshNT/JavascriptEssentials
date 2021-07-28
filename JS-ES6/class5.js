const numbers = new Set([1,2,3,4]);
numbers.add(12)
numbers.add(34)
console.log(numbers.size)
for (let k of numbers.values())
{
    console.log(k);
}
