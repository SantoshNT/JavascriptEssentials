exports.Add=(a,b)=>{return a+b};
exports.Sub=(a,b)=>{return a-b};
exports.Mul=(a,b)=>{return a*b};
exports.Div=(a,b)=>{
    if(b==0){
        return "infinity";
    }else{
        return a/b;
    }
};