var promise = new Promise ((resolve,reject)=>
{
    let result = true;
    if(result){
        resolve()
    }
    else
    reject()
})
promise.then(()=>console.log("Right"),()=>console.log("error"))