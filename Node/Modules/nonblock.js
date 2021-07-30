const fs = require('fs')
fs.readFile('./../text.txt', function(err,data){
if(err)
console.log(err.toString());
console.log(data.toString());
})
console.log('program ended')
