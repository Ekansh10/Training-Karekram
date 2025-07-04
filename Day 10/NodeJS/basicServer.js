const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // content type here is for the browser to interpret what the content type is 
  res.end('Hello World!');
});

// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`
