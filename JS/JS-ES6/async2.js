function f()
{
    let d = new Date;
    console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds())
    time+=1;
    if(time==5){
        clearInterval(set);
    }
}
 let set = setInterval(f,1000);

let time = 0;
