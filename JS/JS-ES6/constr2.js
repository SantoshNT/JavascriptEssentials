
function* collection(){
    yield 1;
    yield 2;
    yield 3;
    yield 36;
}
for (let v of collection())
{
console.log(v)
}
var gen = collection();
for (let i=0;i<5;i++){
    console.log(gen.next().value)
}