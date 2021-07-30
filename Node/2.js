const http = require('http');
http.createServer((req,res)=>{
    res.write("Hello world hi hekko");
    res.end();
}).listen(8001);
console.log('Server running at http://127.0.0.1:8001');