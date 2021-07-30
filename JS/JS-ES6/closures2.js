function foo(outer)
{
    function moo(inner)
    {
        return outer+inner;
    }
    return moo;
}
var getInner = foo(10);
console.log(getInner(12));
console.log(getInner(20));