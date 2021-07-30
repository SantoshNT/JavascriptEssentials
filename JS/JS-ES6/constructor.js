let arr=[1,2,3];
function* generator(arr){
    let i=0;
    while(i<arr.length){
        yield arr[i++]
    }
}
let v = generator(arr);
console.log(v.next());