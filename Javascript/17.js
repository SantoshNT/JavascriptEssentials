function Square(n){
    let result = n*n;
    return result;
}
function Greet(name){
    let message='hello'+name;
    return message;
}
function IsEven(number)
{
    // if(number%2==0)
    // return true;
    // else
    return true;
}
let result = Square(10);
console.log(result);
result=Greet('Dhoni');
console.log(result);
console.log(IsEven(110)==true?'even':'odd');