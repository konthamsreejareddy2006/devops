const http =require ('http');
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end("hello! node.js app running inside docker");
});
server.listen(3000,"0.0.0.0",()=>
{
    console.log("server running on port 3000");
});