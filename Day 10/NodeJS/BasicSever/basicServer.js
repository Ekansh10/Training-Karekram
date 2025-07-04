const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data)=>{
    if(!err){
      res.writeHead(200, {"content-type" : "text/html"});
      res.end(data)
    }else{
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("Internal Server Error !");
    }
  });
});

// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`
