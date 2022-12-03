const http= require('http');
const fs= require('fs');
const path = require('path');
const server   =http.createServer((req,res) => {
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": 'application/json' 
  };
console.log(req.url)
if(req.url === '/'){
    fs.readFile( path.join(__dirname,'public','index.html'),(err,data)=>{

    if (err) throw err;
    res.writeHead(200,{ 'Content-Type' : 'text/html'});
    res.end(data);
    }
 )
 
}
else if(req.url=='/api')
{
    fs.readFile( path.join(__dirname,'public','db.json'),(err,data)=>{

        if (err) throw err;

        res.writeHead(200,headers);
		
		
        res.end(data);
        })

}
else{

    res.end("Eror 404")
}

});

const PORT = process.env.PORT || 5959;
server.listen(PORT,() => console.log(`yay the server is running finally ${PORT}`));