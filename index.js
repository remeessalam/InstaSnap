const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.write('hello world')
    res.end()
}).listen(3000)