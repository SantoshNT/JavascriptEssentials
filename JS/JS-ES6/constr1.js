let arr=[1,2,3];
function* generator(){
    yield 1;
    yield *arr;
    yield 1;
}
for (let v of generator())
{
console.log(v)
}