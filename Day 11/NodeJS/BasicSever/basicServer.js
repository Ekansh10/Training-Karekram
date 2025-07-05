const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  if(req.url == '/'){
    fs.readFile("../client/index.html", (err, data)=>{
    if(!err){
      res.writeHead(200, {"content-type" : "text/html"});
      res.end(data)
    }else{
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("Internal Server Error !");
    }
  });
  }
  else if(req.url == '/client.js'){
    fs.readFile("../client/client.js", (err, data)=>{
    if(!err){
      res.writeHead(200, {"content-type" : "text/javascript"});
      res.end(data)
    }else{
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("Internal Server Error !");
    }
  });
  }
  else if(req.url == '/styles.css'){
    fs.readFile("../client/styles.css", (err, data)=>{
    if(!err){
      res.writeHead(200, {"content-type" : "text/css"});
      res.end(data)
    }else{
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("Internal Server Error !");
    }
  });
  }
  else if(req.url == '/products'){
    var products = [
      {id : 1, name:"LED TV", price:2000 },
      {id : 2, name:"PS5", price:20000 },
      {id : 3, name:"GPU", price:20000 }
    ]
    res.writeHead(200, {"content-type" : "application/json"});
    res.end(JSON.stringify(products));
  }
  
});

// starts a simple http server locally on port 3000
server.listen(3002, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3002');
});

// run with `node server.mjs`
