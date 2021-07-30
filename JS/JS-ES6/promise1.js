var promise = new Promise((resolve,reject)=>{
    let x = 'hello';
    let y = 'hello';
    if(x==y){
        resolve();
    }else{
        reject();
    }
});
promise.then(()=>console.log("Success"),()=>console.log("Tyr once more"));