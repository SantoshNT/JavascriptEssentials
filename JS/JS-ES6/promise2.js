let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('HI im human being')},3000);
});
promise.then((value)=>console.log(value),);