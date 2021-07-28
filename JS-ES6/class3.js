class Foo{
    static M (){
        return 'hello';
    }
}
class Bar extends Foo{

}
class Jar extends Foo{
    static M(){
        return super.M()+' too';
    }
}
console.log(Foo.M());
console.log(Bar.M());
console.log(Jar.M());