
//Spread concate
let arr1 =[1,2,34];
let arr2 = [6,8,9];
let arr = [...arr1,...arr2];
console.log(arr)

//rest arg asa array

function sum(...arg){
    let sum = 0;
    for (let k of arg){
        sum+=k
    }
    console.log(sum)
}

sum(2,2,2,1)