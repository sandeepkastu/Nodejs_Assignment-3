
const fs=require('fs');
const http=require('http');

const server=http.createServer();

fs.writeFile('index.html','<h1>Hello World</h1><p>This is Bhargav ...</p>',(err)=>{console.log(err);})


server.on('request',(req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        
         res.end(data);
         
    })
})

server.listen(600,()=>console.log('Server is up at 600'))

