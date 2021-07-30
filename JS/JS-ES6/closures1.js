//closures
function foo(){
    var b=1;
    function inner(){
        return b;
    }
    return inner;
}
var getInner =foo();
console.log(getInner());
console.log(getInner());