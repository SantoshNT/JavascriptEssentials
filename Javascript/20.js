function callBack(yes, No){
    console.log(yes()+''+No());
}
function yes(){
    return 'yes';
}
function No(){
    return "no";
}
callBack(yes,No)
callBack(function(){return 'ram'},function(){return 'krishan'})
callBack(()=>'ram',()=>'rahim')