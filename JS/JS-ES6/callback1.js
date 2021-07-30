function Display(n)
{
    console.log(n);
}
function calculate(n1,n2,callback){
    let sum = n1+n2;
    callback(sum)
}
calculate(4,5,Display)