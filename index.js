const server = require('http');
const fs = require('fs').promises;

const content = (req,res) =>{
  fs.readFile(__dirname + '/index.html')
    .then(index=>{
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(index);
    })
}

server.createServer(content)
.listen(8000,'localhost', ()=>{
  console.log('localhost:8000 listening')
})
